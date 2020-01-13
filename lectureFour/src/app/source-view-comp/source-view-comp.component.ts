import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source-view-comp',
  templateUrl: './source-view-comp.component.html',
  styleUrls: ['./source-view-comp.component.css']
})
export class SourceViewCompComponent implements OnInit {

  data = "data from sourse!!!"
  constructor() { }

  ngOnInit() {
  }

}
