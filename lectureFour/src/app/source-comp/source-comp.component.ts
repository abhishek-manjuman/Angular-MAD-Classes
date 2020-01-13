import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source-comp',
  templateUrl: './source-comp.component.html',
  styleUrls: ['./source-comp.component.css']
})
export class SourceCompComponent implements OnInit {

  message1= "This is from sourse!!"
  constructor() { }

  ngOnInit() {
  }

}
