import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {DynamicFormComponent} from "./dynamic-form.component";
import {DynamicFormFieldsComponent} from "./dynamic-form-fields.component";
import {DynamicFormEditComponent} from "./dynamic-form-edit.component";
import {LMarkdownEditorModule} from "ngx-markdown-editor";
import {NgSelectModule} from "@ng-select/ng-select";
import {DynamicFormRouting} from "./dynamic-form.routing";

@NgModule({
  declarations: [
    DynamicFormFieldsComponent,
    DynamicFormComponent,
    DynamicFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LMarkdownEditorModule,
    NgSelectModule,
    DynamicFormRouting
  ],
})

export class DynamicFormModule { }
