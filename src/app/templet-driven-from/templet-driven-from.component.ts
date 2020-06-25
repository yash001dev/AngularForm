import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templet-driven-from',
  templateUrl: './templet-driven-from.component.html',
  styleUrls: ['./templet-driven-from.component.css']
})
export class TempletDrivenFromComponent {

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
