import { NgForm } from '@angular/forms';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f',{static:false}) signupForm:NgForm;

  defaultQuestion='pet';
  answer='';
  genders=['male','female'];
  user={
    username:'',
    email:'',
    secreatQuestion:'',
    answer:'',
    gender:''
  };
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  submitted=false;
  // onSubmit(form:ElementRef){
  //   this.user.username
  // }
  onSubmit(){
    this.submitted=true;
    this.user.username=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.secreatQuestion=this.signupForm.value.secret;
    this.user.answer=this.signupForm.value.questionAnswer;
    this.user.gender=this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
