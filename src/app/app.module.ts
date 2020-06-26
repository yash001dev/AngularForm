import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempletDrivenFromComponent } from './templet-driven-from/templet-driven-from.component';
import { NewComponent } from './new/new.component';

const routes:Routes=[
  {
    path:'',
    component:TempletDrivenFromComponent,
    pathMatch:'full'
  },
  {
    path:'reactive',
    component:ReactiveFormComponent
  },
  {
    path:'new',
    component:NewComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TempletDrivenFromComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
