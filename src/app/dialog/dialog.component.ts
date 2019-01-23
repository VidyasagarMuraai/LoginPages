import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SOAPHandlerService} from '../cordysServices/soap-handler.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  userid:any;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private soapService:SOAPHandlerService) { 
       this.userid=data.USER_ID;
      /* soapService.deleteUserFromUserDetails(this.userid).subscribe(
       (response:any) =>{
            console.log(response);
        }
      )*/
      
    }

  ngOnInit() {
  }

}
