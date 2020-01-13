import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor() { }


  gender = ["Male","Female", "Other"]
  formData: any = {};
  
  ngOnInit() {

  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log(this.fname);
  }
  sendData() {
    // this.formData = userForm.value
  }

}
