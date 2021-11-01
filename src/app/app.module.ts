import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./pages/home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {ReusableComponentsModule} from "../catalogue-ui/shared/reusable-components/reusable-components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DynamicFormModule} from "../catalogue-ui/pages/dynamic-form/dynamic-form.module";
import {SearchComponent} from "../catalogue-ui/pages/search/search.component";
import {CatalogueUiModule} from "../catalogue-ui/catalogue-ui.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
