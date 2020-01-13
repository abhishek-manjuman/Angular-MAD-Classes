import { Component, OnInit, ViewChild } from '@angular/core';
import { SourceViewCompComponent } from '../source-view-comp/source-view-comp.component';

@Component({
  selector: 'app-dest-view-comp',
  templateUrl: './dest-view-comp.component.html',
  styleUrls: ['./dest-view-comp.component.css']
})
export class DestViewCompComponent implements OnInit {
  @ViewChild(SourceViewCompComponent, {static: false}) sourseData
  constructor() { }
  dtv
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("Sourse is running!!");
    this.dtv = this.sourseData.data
    
  }

}
