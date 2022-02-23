import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../../services/catalogue.service";
import {ChapterAnswer, Survey, SurveyAnswer} from "../../domain/survey";


@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html'
})

export class FormComponent implements OnInit {

  answerMap: Map<string, ChapterAnswer> = new Map<string, ChapterAnswer>();
  chapterAnswer: ChapterAnswer = null;
  tabsHeader: string = null;
  survey: Survey = null;
  surveyAnswers: SurveyAnswer = null
  datasetTypeId: string;

  constructor(private activatedRoute: ActivatedRoute, private catalogueService: CatalogueService) {
  }

  ngOnInit() {
    this.datasetTypeId = this.activatedRoute.snapshot.params['datasetTypeId'];
    this.catalogueService.getResourceTypeById(this.datasetTypeId, 'dataset_type').subscribe(
      res => {
        this.chapterAnswer = new ChapterAnswer('c-tTpgVjMV', res);
      },
      error => {
        console.log(error);
      },
      () => {
        this.answerMap['ca-tTpgVjMV'] = this.chapterAnswer;
        this.surveyAnswers = new SurveyAnswer(this.answerMap, 'm-eNScSZrq');
      }
    );
  }

}
