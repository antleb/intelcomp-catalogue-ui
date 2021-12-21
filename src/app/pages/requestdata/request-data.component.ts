import {Component, OnDestroy, OnInit} from "@angular/core";
import {URLParameter} from "../../../catalogue-ui/domain/url-parameter";
import {DatasetLandingPageComponent} from "../landingpages/datasets/dataset-landing-page.component";
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NavigationService} from "../../services/navigation.service";
import {CatalogueService} from "../../services/catalogue.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-request-data',
  templateUrl: 'request-data.component.html'
})

// export class RequestDataComponent implements OnInit{
export class RequestDataComponent implements OnInit, OnDestroy {

  formPrepare = {
    dateFrom: '',
    dateTo: '',
    publishers: this.fb.array([this.fb.control('')]),
    journals: this.fb.array([this.fb.control('')]),
    projects: this.fb.array([this.fb.control('')])
  };

  dataForm: FormGroup;

  dataset: Object = null;
  instance: Object = null;

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
          console.log('before call');
          this.catalogueService.getInstance(dataRequestIds, 'dataset_instance').subscribe(
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
  }

  ngOnDestroy(): void {
    this.navigationService.setDataRequestIds(null);
    this.instance = null;
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
  /** <--manage form arrays **/

}

