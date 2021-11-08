import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SearchComponent} from "../catalogue-ui/pages/search/search.component";
import {LandingPageComponent} from "../catalogue-ui/pages/landingpages/dataset/landing-page.component";
import {DynamicFormComponent} from "../catalogue-ui/pages/dynamic-form/dynamic-form.component";
import {IntelcompSearchComponent} from "./pages/search/intelcomp-search.component";
import {DatasetLandingPageComponent} from "./pages/landingpages/datasets/dataset-landing-page.component";
import {FormBuilderComponent} from "../catalogue-ui/pages/form-builder/form-builder.component";

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
    path: 'form',
    component: DynamicFormComponent
    // loadChildren: () => import('../app/pages/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule)
  },
  {
    path: 'formBuilder',
    component: FormBuilderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
