import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../../services/catalogue.service";
import {ChapterAnswer, Survey, SurveyAnswer} from "../../domain/survey";


@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html'
})

export class FormComponent implements OnInit {

  // answerMap: Map<string, ChapterAnswer> = new Map<string, ChapterAnswer>();
  // chapterAnswer: ChapterAnswer = null;
  tabsHeader: string = null;
  survey: Survey = null;
  surveyAnswers: SurveyAnswer = null
  datasetTypeId: string;

  constructor(private activatedRoute: ActivatedRoute, private catalogueService: CatalogueService) {
  }

  ngOnInit() {
    this.datasetTypeId = this.activatedRoute.snapshot.params['datasetTypeId'];
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
    );
  }

}
