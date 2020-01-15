import { Component, OnInit } from '@angular/core';
import {TestService} from '../services/test.service'
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  obj:any = {}
  constructor(private textStr:TestService) { }

  ngOnInit() {
    this.textStr.data1 = {"var1":"Hello, "}
  }

}
