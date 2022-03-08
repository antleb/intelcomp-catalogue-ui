import {Component, OnInit} from "@angular/core";
import {CatalogueService} from "../../services/catalogue.service";
import {BrowseJob} from "../../domain/job";


@Component({
  selector: 'app-browse-jobs',
  templateUrl: 'browse-jobs.component.html'
})

export class BrowseJobsComponent implements OnInit{

  jobs: BrowseJob[] = [];

  constructor(private catalogueService: CatalogueService) {
  }

  ngOnInit() {
    this.catalogueService.getJobs().subscribe(
      res => {this.jobs = res},
      error => {console.log(error)},
      () => {
        for (const job of this.jobs) {
          job.callerAttributesObj = JSON.parse(job.callerAttributes);
        }
      }
    )
  }

  getValueFromObject(id: string, valueName: string) {
    for (const job of this.jobs) {
      if (job.id === id) {
        for (const callerAttributesObjElement in job.callerAttributesObj) {
          if (job.callerAttributesObj[callerAttributesObjElement]['name'] === valueName) {
            return job.callerAttributesObj[callerAttributesObjElement]['value'];
          }
        }
      }
    }
    return null;
  }

}
