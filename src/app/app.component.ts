import { Component, OnInit,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatIconModule,MatSidenavModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SOAPHandlerService} from './cordysServices/soap-handler.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lms';
  loginID:any;
  password:any;
  successlogin:any;
  constructor(private soapService:SOAPHandlerService,private router:Router){
  }
  public createNewUser(){
  
    this.router.navigate(['/dashboard/Newuser']); 

  }
  public empDetails(){
    this.router.navigate(['/dashboard/EmpDetails']); 
  }

}
