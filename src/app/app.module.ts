import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./pages/home/home.component";
import {DynamicFormModule} from "./pages/dynamic-form/dynamic-form.module";
import {HttpClientModule} from "@angular/common/http";
import {SearchComponent} from "./pages/search/search.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ReusableComponentsModule} from "./shared/reusable-components/reusable-components.module";
import {DatasetLandingPageComponent} from "./pages/landingpages/dataset/dataset-landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DatasetLandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DynamicFormModule,
    ReactiveFormsModule,
    ReusableComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
