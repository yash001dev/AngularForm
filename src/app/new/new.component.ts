import { CustomValidators } from './custom-validators';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  projectForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.projectForm=new FormGroup({
      'projectName':new FormControl(null,[Validators.required,CustomValidators.invalidProjectName],CustomValidators.asyncInvalidProject),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'projectStatus':new FormControl('critical')
    });
  }
  onSaveProject(){
    console.log(this.projectForm);
  }

}
