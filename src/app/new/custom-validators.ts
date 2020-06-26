import { rejects } from 'assert';
import { FormControl, Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'dns';
export class CustomValidators{
  static invalidProjectName(control:FormControl):{[s:string]:boolean}{
    if(control.value==='Test'){
      return {'invalidProjectName':true};
    }
    return null;
  }

  static asyncInvalidProject(control:FormControl):Promise<any>|Observable<any>{
    const promise=new Promise((resolve,rejects)=>{
      setTimeout(()=>{
        if(control.value==='Testproject'){
          resolve({'invalidProjectName':true})
        }
        else{
          resolve(null);
        }
      },2000)
    })
    return promise;
  }
}
