import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-dest',
  templateUrl: './user-dest.component.html',
  styleUrls: ['./user-dest.component.css']
})
export class UserDestComponent implements OnInit {
  @Input() formObj:any = {}
  constructor() { }

  ngOnInit() {
  }

}
