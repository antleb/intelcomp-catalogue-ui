import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

import {IntelcompSearchComponent} from "./pages/search/intelcomp-search.component";
import {DatasetLandingPageComponent} from "./pages/landingpages/datasets/dataset-landing-page.component";
import {RequestDataComponent} from "./pages/requestdata/request-data.component";
import {FormComponent} from "./pages/form/form.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search',
    component: IntelcompSearchComponent
  },
  {
    path: 'dataset/:id',
    component: DatasetLandingPageComponent
  },
  {
    path: 'request-data',
    component: RequestDataComponent
  },
  {
    path: 'form/:datasetTypeId',
    component: FormComponent
    // loadChildren: () => import('../app/pages/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
