import {Component, OnDestroy, OnInit} from "@angular/core";
import {URLParameter} from "../../../catalogue-ui/domain/url-parameter";
import {DatasetLandingPageComponent} from "../landingpages/datasets/dataset-landing-page.component";
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NavigationService} from "../../services/navigation.service";
import {CatalogueService} from "../../services/catalogue.service";
import {ActivatedRoute} from '@angular/router';

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
    publishers: this.fb.array([this.fb.control('')]),
    journals: this.fb.array([this.fb.control('')]),
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
        error => {console.log('error');},
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

