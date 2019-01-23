import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SOAPHandlerService} from '../cordysServices/soap-handler.service';


declare var  $:any;
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  userid:any;
  tupleNode:any;
  constructor(private soapService:SOAPHandlerService) {     
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
  public createNewUser(){
    
  }



}
