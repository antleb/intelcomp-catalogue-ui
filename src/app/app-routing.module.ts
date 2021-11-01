import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SearchComponent} from "../catalogue-ui/pages/search/search.component";
import {DatasetLandingPageComponent} from "../catalogue-ui/pages/landingpages/dataset/dataset-landing-page.component";
import {DynamicFormComponent} from "../catalogue-ui/pages/dynamic-form/dynamic-form.component";

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
    component: SearchComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
