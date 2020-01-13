import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {
  title : 'Comp Componets';
  constructor() { 
    console.log("Comp one componets!!");
    
  }
  ngOnInit() {
    console.log("Comp one Init call!");
    this.title;
  }
}
