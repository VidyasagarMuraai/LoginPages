import { Component, OnInit } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatCardModule,} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SOAPHandlerService} from '../cordysServices/soap-handler.service';
import {MediaMatcher} from '@angular/cdk/layout';
declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username:any;
  str="";
  constructor(private soapService:SOAPHandlerService) { }

  ngOnInit() {
    this.username=localStorage.getItem("username");
    this.SetMenuBasedOnRole("BD");
  }
  goToCreateLead(){
    window.location.href = 'http://192.168.0.150:81/home/RandstadNew/com/opentext/lms/xforms/Transactions/Lead_Details.caf';
  }
  SetMenuBasedOnRole(data:any){
    this.soapService.getMenuDetailsForRole(data).subscribe(
      (response:any)=>{
        let tupleNodes = $.cordys.json.findObjects(response, 'RS_LMS_MASTER_FIELD_VALUES');
    
        for (var j = 0; j < tupleNodes.length; j++) {
          this.str += " <li class=''><a onclick='destination(this,\"" + tupleNodes[j].MF_TEMP1 + "\",\"" +tupleNodes[j].MFV_VALUE  + "\")'><i class='fa "+tupleNodes[j].MF_TEMP2+"' id='icon1' title='"+tupleNodes[j].MFV_VALUE+"'></i> <span class='nav-label'>"+tupleNodes[j].MFV_VALUE+ "</span></a></li>"; 
         }  
      this.str += "</li>";
      }
      )
    

  }
}
