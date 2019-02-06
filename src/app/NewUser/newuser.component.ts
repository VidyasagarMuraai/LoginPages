import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SOAPHandlerService} from '../cordysServices/soap-handler.service';
import {Router} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup,FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

declare var  $:any;
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  userid:any;
  tupleNode:any;
  desin:any;
  exp:any;
  sta:any;
  gen:any;
  type:any;
  valid=true;
  constructor(private soapService:SOAPHandlerService,private router:Router,private formBuilder: FormBuilder) { 

    }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          fname: ['', Validators.required],
          mname: ['', [Validators.required]],
          mobileNo: ['', [Validators.required]],
          pm: ['', Validators.required],
          leaveApp: ['', [Validators.required]],
          leaveRe: ['', [Validators.required]],
          empID: ['', Validators.required],
          loc: ['', Validators.required],
          address: ['', [Validators.required]]
         
      });
  
  }
  public getUserDetailsBasedOnUserID(){
    this.soapService.getUserDetailsBasedOnID(this.userid).subscribe(
      (response:any) =>{
        this.tupleNode=$.cordys.json.findObjects(response, 'USER_DETAILS');
      }
    )
  }
  public createNewUser(){
    
   

      let dataObj={
        username:this.registerForm.controls.name.value,
        empID:this.registerForm.controls.empID.value,
        gender:this.gen,
        manager:this.registerForm.controls.pm.value,
        app:this.registerForm.controls.leaveApp.value,
        remain:this.registerForm.controls.leaveRe.value,
        phoneNo:this.registerForm.controls.mobileNo.value,
        designation:this.desin,
        exp:this.exp,
        fname:this.registerForm.controls.fname.value,
        mname:this.registerForm.controls.mname.value,
        status:this.sta,
        location:this.registerForm.controls.loc.value,
        period:this.type,
        address:this.registerForm.controls.address.value,
        sal:100,
        emrContact:100

        
      }
      console.log(dataObj);
      this.soapService.createNewUser(dataObj).subscribe(
        (response:any) =>{
          let tupleNodes = $.cordys.json.findObjects(response, 'USER_DETAILS');
          console.log(tupleNodes);
          if(tupleNodes.length>0){
            alert("Successfully inserted");
           this.router.navigate(['/select/dashboard']);
          }
        },
        (err)=>{
          console.log(err);
          alert("Successfully inserted");
          this.router.navigate(['/select/dashboard']);
        }
      )

    
   
  }
  public close(){
    this.router.navigate(['/select/dashboard'])
  }
  public experience(event){
    console.log(event);
    this.exp=event;
  }
  public designation(event){
    console.log(event);
    this.desin=event;
  }
  public status(event){
    console.log(event);
    this.sta=event;
  }
  public gender(event){
    console.log(event);
   this.gen=event;
  }
  public typeOfJob(data:any){
    console.log(data);
    this.type=data;
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
     if (this.registerForm.invalid) {
      //this.submitted=false;
      
         return;
     }
     this.createNewUser();
     //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
 }



}
