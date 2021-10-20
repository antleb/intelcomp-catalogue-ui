import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DynamicFormComponent} from "./dynamic-form.component";

const dynamicFormRouting: Routes = [
  {
    path: '',
    component: DynamicFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(dynamicFormRouting)],
  exports: [RouterModule]
})

export class DynamicFormRouting {
}
