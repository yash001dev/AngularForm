import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";
import { rejects } from "assert";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
})
export class ReactiveFormComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernames=['Yash','Rutu'];

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmails),
      }),
      gender: new FormControl("male"),
      hobbies:new FormArray([])
    });
    //For Maintaining State of Forms
    this.signupForm.valueChanges.subscribe(
      (value)=>console.log(value)
    );
  }
  onSubmit() {
    console.log(this.signupForm);
  }
  onAddHobby(){
    const control=new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  forbiddenNames(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenUsernames.indexOf(control.value)!== -1){
      return {'nameIsForbidden':true};
    }
    return null;
  }

  forbiddenEmails(control:FormControl):Promise<any> | Observable<any>{
    const promise=new Promise<any>((resolve,rejects)=>{
      setTimeout(()=>{
        if(control.value==='test@test.com'){
          resolve({'emailIsForbidden':true});
        }else{
          resolve(null);
        }
      },1500);
  });
  return promise;
  }
}
