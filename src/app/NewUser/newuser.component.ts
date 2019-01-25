import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SOAPHandlerService} from '../cordysServices/soap-handler.service';
import {Router} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

declare var  $:any;
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  //emailFormControl:FormControl;

  

  
  emailFormControl = new FormControl('', [
    Validators.email,
    Validators.required,
  ]);

  /*createFormControls(){
    this.emailFormControl = new FormControl('', [
      Validators.email,
      Validators.required,
    ]);
    this.name=new FormControl('',[
      Validators.required,
    ]);
    this.fname=new FormControl('',[
      Validators.required,
    ]);
    this.mname=new FormControl('',[
      Validators.required,
    ]);
    this.address= new FormControl('',[
      Validators.required,
    ]);

  }
  createFormGroup(){
    this.myform = new FormGroup({
      name: this.name,
      last: this.fname,
      mname:this.mname,
      email:this.emailFormControl,
      address:  this.address
    });

  }*/
 
  userid:any;
  tupleNode:any;
  desin:any;
  exp:any;
  sta:any;
  gen:any;
  type:any;
  
  constructor(private soapService:SOAPHandlerService,private router:Router) { 
    //this.createFormControls();
    //this.createFormGroup();    
  
    
    }

  ngOnInit() {
  
    //this.createFormControls();
   // this.createFormGroup();
  }
  public getUserDetailsBasedOnUserID(){
    this.soapService.getUserDetailsBasedOnID(this.userid).subscribe(
      (response:any) =>{
        this.tupleNode=$.cordys.json.findObjects(response, 'USER_DETAILS');
      }
    )
  }
  public createNewUser(name:any,fname:any,mname:any,mobile:any,add:any,pm:any,la:any,lr:any,empID:any,loc:any){
    const busObj={
      username:name,empID:empID,gender:this.gen,manager:pm,remain:lr,app:la,sal:'100',phoneNo:mobile,designation:this.desin
      ,exp:this.exp,fname:fname,mname:mname,status:this.sta,location:loc,period:this.type,emrContact:'100'
    }
    console.log(busObj);
    this.soapService.createNewUser(busObj).subscribe(
      (response:any) =>{
        let tupleNodes = $.cordys.json.findObjects(response, 'USER_DETAILS');
        console.log(tupleNodes);
        if(tupleNodes.length>0){
          alert("Successfully inserted");
          this.router.navigate(['/select/dashboard']);
        }
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



}
