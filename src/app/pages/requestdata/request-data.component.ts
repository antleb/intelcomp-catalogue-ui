import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {NavigationService} from "../../services/navigation.service";
import {CatalogueService} from "../../services/catalogue.service";
import {Job, JobArguments} from "../../domain/job";

declare var UIkit: any;

@Component({
  selector: 'app-request-data',
  templateUrl: 'request-data.component.html'
})

export class RequestDataComponent implements OnInit, OnDestroy {

  formPrepare = {
    entity: 'publication',
    dateFrom: '',
    dateTo: '',
    funder: this.fb.array([this.fb.control('')]),
    journal: this.fb.array([this.fb.control('')]),
    projects: this.fb.array([
      this.fb.group({
      name: [''],
      acronym: ['']
      })
    ])
  };

  dataForm: FormGroup;

  instance: Object = null;
  dataset: Object = null;

  instanceId: string;

  job: Job = new Job();
  jobArguments: JobArguments[] =  [];

  constructor(
    private fb: FormBuilder,
    private navigationService: NavigationService,
    private catalogueService: CatalogueService,
  ) {}

  ngOnInit() {
    this.dataForm = this.fb.group(this.formPrepare);

    this.navigationService.dataRequestIds$.subscribe(dataRequestIds => {
      console.log('show dataRequestIds:',dataRequestIds);
        if (dataRequestIds) {
          console.log('before call',dataRequestIds.instanceId, dataRequestIds.datasetId);
          this.catalogueService.getResourceTypeById(dataRequestIds.instanceId, 'dataset_instance').subscribe(
            res => {
              this.instance = res;
              console.log(this.instance);
            }
          )
        } else {
          console.log('there is no dataRequestIds');
        }
        },
        error => {console.log(error);},
        () => {console.log('subject is', this.navigationService.dataRequestIds$);}
      )

    this.navigationService.dataRequestIds$.subscribe(dataRequestIds => {
        // console.log('show dataRequestIds:',dataRequestIds);
        if (dataRequestIds) {
          // console.log('before call',dataRequestIds.instanceId, dataRequestIds.datasetId);
          this.catalogueService.getResourceTypeById(dataRequestIds.datasetId, 'dataset_type').subscribe(
            res => {
              this.dataset = res;
              console.log(this.dataset);
            }
          )
        } else {
          console.log('there is no dataRequestIds');
        }
      },
      error => {console.log('error');},
      () => {console.log('subject is', this.navigationService.dataRequestIds$);}
    )
  }

  ngOnDestroy(): void {
    this.navigationService.setDataRequestIds(null, null);
    this.instance = null;
    this.dataset = null;
  }

  submit() {
    this.job.jobArguments.push(new JobArguments('datasetId', this.instance['metadata']['identifier']['value']));


    for (const [key, value] of Object.entries(this.dataForm.getRawValue())) {

      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        for (const [subKey, subValue] of Object.entries(this.dataForm.get(key).value)) {
          console.log(`${subKey}: ${subValue}`);
        }
      } else if (typeof value === 'object' && Array.isArray(value) && value !== null) {
        let tmpArr = this.dataForm.get(key) as FormArray;
        console.log(tmpArr);
        for (let i = 0; i < value.length; i++) {
          if (typeof value[i] === 'object' && !Array.isArray(value[i])) {
            for (let j = 0; j < tmpArr.length; j++) {
              console.log(tmpArr[j]);
            }
            // for (const [subKey, subValue] of Object.entries(this.dataForm.get(key)[i].value)) {
            //   console.log(`${subKey}: ${subValue}`);
              // console.log(this.dataForm.get(key).get(subKey).value);
            // }
          } else if (value[i] !== '') {
            console.log(`${key}: ${value[i]}`);
            this.job.jobArguments.push(new JobArguments(key, value[i].toString()));
          }
        }

      } else if (value !== '' && key !== 'entity') {
        console.log(`${key}: ${value}`);
        this.job.jobArguments.push(new JobArguments(key, value.toString()));
      }
    }

    console.log(this.job);
    for (let i = 0; i < this.job.jobArguments.length; i++) {
      this.jobArguments.push(this.job.jobArguments[i]);
    }
    this.jobArguments.push(new JobArguments('version', this.instance['metadata']['version']));
    this.jobArguments.push(new JobArguments('name', this.dataset['name']));
    this.jobArguments.push(new JobArguments('entity', this.dataForm.get('entity').value));
    console.log(this.jobArguments);
    this.job.callerAttributes = JSON.stringify(this.jobArguments);
    this.job.serviceArguments.processId = 'TouJohny2';

    this.catalogueService.addJob(this.job).subscribe(
      res => {console.log(res)},
      error => {console.log(error)}
    );
    this.job = new Job();
  }

  /** manage form arrays--> **/
  getFieldAsFormArray(field: string) {
    return this.dataForm.get(field) as FormArray;
  }

  push(field: string) {
    this.getFieldAsFormArray(field).push(this.fb.control(''));
  }

  remove(field: string, i: number) {
    this.getFieldAsFormArray(field).removeAt(i);
  }

  /** projects **/
  newProject(): FormGroup {
    return this.fb.group({
      name: [''],
      acronym: ['']
    });
  }

  get projectArray() {
    return this.dataForm.get('projects') as FormArray;
  }

  pushProject() {
    this.projectArray.push(this.newProject());
  }

  removeProject(index: number) {
    this.projectArray.removeAt(index);
  }

  /** <--manage form arrays **/

  printMyData(){
    console.log(this.dataForm.value);
  }

  sampleModal() {
    UIkit.modal('#sampleModal').show();
  }

}

