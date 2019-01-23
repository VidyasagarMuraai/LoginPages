import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SOAPHandlerService} from '../cordysServices/soap-handler.service';
import {Router} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

declare var  $:any;
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
   
  ]);
  userid:any;
  tupleNode:any;
  desin:any;
  exp:any;
  sta:any;
  gen:any;
  
  constructor(private soapService:SOAPHandlerService,private router:Router) {     
    
    }

  ngOnInit() {
   
    
  }
  public getUserDetailsBasedOnUserID(){
    this.soapService.getUserDetailsBasedOnID(this.userid).subscribe(
      (response:any) =>{
        this.tupleNode=$.cordys.json.findObjects(response, 'USER_DETAILS');
      }
    )
  }
  public createNewUser(name:any,fname:any,mname:any,mobile:any,add:any,pm:any,la:any,lr:any,empID:any){
    const busObj={
      username:name,empID:empID,gender:this.gen,manager:pm,remain:lr,app:la,sal:'100',phoneNo:mobile,designation:this.desin
      ,exp:this.exp,fname:fname,mname:mname,status:this.sta
    }
    this.soapService.createNewUser(busObj).subscribe(
      (response:any)=>{
        console.log(response);
      }
    )
  }
  public close(){
    this.router.navigate(['\dashboard'])
  }
  public experience(event){
    console.log(event);
    this.exp=event;
  }
  public designation(event){
    this.desin=event;
  }
  public status(event){
    this.sta=event;
  }
  public gender(event){
   this.gen=event;
  }



}
