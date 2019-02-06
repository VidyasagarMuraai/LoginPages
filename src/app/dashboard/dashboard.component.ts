import { Component, OnInit,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatIconModule,MatSidenavModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SOAPHandlerService} from '../cordysServices/soap-handler.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface PeriodicElement {
  EMP_ID: any;
  USER_NAME: string;
  GENDER: string;
  LOCATION: string;
}
declare var $:any;

@Component({
    selector: 'app-leave',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
  })
  export class DashboardComponent implements OnInit{
    createNewUserHide:boolean;
    createUsr:boolean;
    user_id:any;
    logoutButon:boolean;
    isdisabled=true;
    tupleNodes:any;
    displayedColumns: string[] = ['EmployeeID', 'UserName', 'Gender', 'Location','Update','Delete'];
    dataSource ;
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
    ngOnInit(): void {
      this.userDetailsTemplates();
      console.log(this.tupleNodes);
      this.createNewUserHide=true;
      let leaveComp= localStorage.getItem("InitialValue");
       if(leaveComp=="AppCompShow"){
         //this.leaveHide=true;
       }
       
    }
    
   constructor(private sOAPHandlerService:SOAPHandlerService,private router:Router,private dialog:MatDialog){
      this.userDetailsTemplates();
   }
   public userDetailsTemplates(){
      this.sOAPHandlerService.getAllUserDetails().subscribe(
         (response:any) =>{
           this.tupleNodes = $.cordys.json.findObjects(response, 'USER_DETAILS');
           console.log(this.tupleNodes);
           this.dataSource= new MatTableDataSource<PeriodicElement>(this.tupleNodes);
           this.dataSource.paginator = this.paginator;
         },
         (err)=>{
        }
     )
   }
   

  
    public deleteUserDetails(data:any){
      if(confirm("Are you sure to delete "+data.EMP_ID)) {
        console.log("Implement delete functionality here");
        this.sOAPHandlerService.deleteUserFromUserDetails(data.USER_ID).subscribe(
          (reponse:any)=>{
            console.log("Successfully deleted");
          },
          (err)=>{
            console.log("Successfully deleted");
            window.location.reload();
          }
        )
      }
    }
    public updateUserDetails(data:any){
      console.log(data.USER_ID);
      let userid=data.USER_ID
      const dialogRef=this.dialog.open(DialogComponent,{
        width: '700px',
        height:'450px',
        data:userid
      });

    }
    
  }
