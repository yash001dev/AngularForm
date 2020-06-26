import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempletDrivenFromComponent } from './templet-driven-from/templet-driven-from.component';

const routes:Routes=[
  {
    path:'',
    component:TempletDrivenFromComponent,
    pathMatch:'full'
  },
  {
    path:'reactive',
    component:ReactiveFormComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TempletDrivenFromComponent
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
