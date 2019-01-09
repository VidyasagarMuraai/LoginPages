import { Component, OnInit } from '@angular/core';
import {SOAPHandlerService} from '../cordysServices/soap-handler.service';
import {MatCardModule} from '@angular/material/card';
import {AppRoutingModule} from '../app-routing.module';
import {Router} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginID:any;
  password:any;
  successlogin:any;
  ngOnInit() {
    this.route.navigate(['/login']);
  }

  constructor(private soapService:SOAPHandlerService,private route:Router ){
  }
 

 
}
