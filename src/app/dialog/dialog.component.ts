import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SOAPHandlerService} from '../cordysServices/soap-handler.service';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup,FormBuilder} from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  userid:any;
  registerForm:FormGroup;
    
 
  
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private soapService:SOAPHandlerService,private formBuilder: FormBuilder,private router:Router) { 
       this.userid=data 
     
    }

  ngOnInit() {
    this.buildRegForm();
    this.patchValues();
  }
  public patchValues(){
    this.soapService.getUserDetailsBasedOnID(this.userid).subscribe(
      (response:any) =>{
         let tupleNodes = $.cordys.json.findObjects(response, 'USER_DETAILS');
        console.log(tupleNodes[0]);
       this.registerForm.controls['name'].setValue(tupleNodes[0].USER_NAME);
       this.registerForm.controls['empID'].setValue(tupleNodes[0].EMP_ID);
       this.registerForm.controls['gender'].setValue(tupleNodes[0].GENDER);
       this.registerForm.controls['projectManager'].setValue(tupleNodes[0].MANAGER);
       this.registerForm.controls['leavesapp'].setValue(tupleNodes[0].NO_OF_LEAVES_APPLIED);
       this.registerForm.controls['mobile'].setValue(tupleNodes[0].PHONE_NO);
       this.registerForm.controls['exp'].setValue(tupleNodes[0].EXPERIENCE);
       this.registerForm.controls['designation'].setValue(tupleNodes[0].DESIGNATION);
       this.registerForm.controls['fname'].setValue(tupleNodes[0].FATHER_NAME);
       this.registerForm.controls['mname'].setValue(tupleNodes[0].MOTHER_NAME);
       this.registerForm.controls['status'].setValue(tupleNodes[0].STATUS);
      }
    )

  }
  get f() { return this.registerForm.controls; }

  public updateUserDetails(){
    let dataObj={
      username:this.registerForm.get('name').value,
      empID:this.registerForm.get('empID').value,
      gender:this.registerForm.get('gender').value,
      manager:this.registerForm.get('projectManager').value,
      app:this.registerForm.get('leavesapp').value,
      phoneNo:this.registerForm.get('mobile').value,
      designation:this.registerForm.get('designation').value,
      exp:this.registerForm.get('exp').value,
      fname:this.registerForm.get('fname').value,
      mname:this.registerForm.get('mname').value,
      status:this.registerForm.get('status').value,
      userid:this.userid,
    }
    
   this.soapService.updateUserdetailsBasedID(dataObj).pipe(map((res) => {
      return JSON.stringify(res);
   })).subscribe(
     response=>{
       console.log(response);
       this.dialogRef.close();
       window.location.reload();
       this.router.navigate(['/select/dashboard']); 
     },
     (err)=>{
      console.log(err);
      this.dialogRef.close();
      window.location.reload();
    }
  
   )
  }
  public buildRegForm(){
   
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      fname: ['', [Validators.required, Validators.email]],
      mname: ['', [Validators.required, Validators.minLength(6)]] ,
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      designation: ['', [Validators.required, Validators.email]],
      exp: ['', [Validators.required, Validators.minLength(6)]],
      projects: ['', Validators.required],
      projectManager: ['', Validators.required],
      leavesapp: ['', [Validators.required, Validators.email]],
      status: ['', [Validators.required, Validators.minLength(6)]],
      empID: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  public close(){
    this.dialogRef.close();
  }
  
}
