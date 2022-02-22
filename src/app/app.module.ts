import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./pages/home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {ReusableComponentsModule} from "../catalogue-ui/shared/reusable-components/reusable-components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CatalogueUiModule} from "../catalogue-ui/catalogue-ui.module";
import {IntelcompSearchComponent} from "./pages/search/intelcomp-search.component";
import {DatasetLandingPageComponent} from "./pages/landingpages/datasets/dataset-landing-page.component";
import {IntelcompTopMenuComponent} from "./shared/topmenu/topmenu.component";
import {IntelcompFooterComponent} from "./shared/footer/footer.component";
import {RequestDataComponent} from "./pages/requestdata/request-data.component";
import {NavigationService} from "./services/navigation.service";
import {CatalogueService} from "./services/catalogue.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntelcompTopMenuComponent,
    IntelcompFooterComponent,
    IntelcompSearchComponent,
    DatasetLandingPageComponent,
    RequestDataComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReusableComponentsModule,
    CatalogueUiModule,
  ],
  providers: [
    CatalogueService,
    NavigationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
