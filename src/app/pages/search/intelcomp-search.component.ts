import {Component} from "@angular/core";
import {SearchComponent} from "../../../catalogue-ui/pages/search/search.component";
import {SearchService} from "../../../catalogue-ui/services/search.service";

@Component({
  selector: 'app-intelcomp-search',
  templateUrl: './intelcomp-search.component.html',
  providers: [SearchService]
})

export class IntelcompSearchComponent extends SearchComponent{

}
