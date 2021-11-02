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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntelcompSearchComponent,
    DatasetLandingPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReusableComponentsModule,
    CatalogueUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
