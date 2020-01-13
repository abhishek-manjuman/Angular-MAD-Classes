import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dest-event',
  templateUrl: './dest-event.component.html',
  styleUrls: ['./dest-event.component.css']
})
export class DestEventComponent implements OnInit {
  msg: any
  constructor() { }

  ngOnInit() {
  }
  resiveMessage($event){
    console.log("We From source!!!");
    this.msg = $event
  }

}
