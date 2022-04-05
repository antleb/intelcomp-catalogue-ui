import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../../services/catalogue.service";
import {Survey, SurveyAnswer} from "../../domain/survey";
import {Subscriber} from "rxjs";


@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html'
})

export class FormComponent implements OnInit, OnDestroy {

  subscriptions = [];
  tabsHeader: string = null;
  survey: Survey = null;
  surveyAnswers: SurveyAnswer = null
  datasetTypeId: string;

  constructor(private activatedRoute: ActivatedRoute, private catalogueService: CatalogueService) {
  }

  ngOnInit() {
    this.datasetTypeId = this.activatedRoute.snapshot.params['datasetTypeId'];
    this.subscriptions.push(
      this.catalogueService.getDatasetAnswer(this.datasetTypeId).subscribe(
        res => {
          this.surveyAnswers = res;
          this.surveyAnswers.modelId = 'm-eNScSZrq';
          this.surveyAnswers.chapterAnswers[this.datasetTypeId].chapterId = 'c-tTpgVjMV';
          console.log(this.surveyAnswers);
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription instanceof Subscriber) {
        subscription.unsubscribe();
      }
    });
  }

}
