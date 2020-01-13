import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-source-event',
  templateUrl: './source-event.component.html',
  styleUrls: ['./source-event.component.css']
})
export class SourceEventComponent implements OnInit {

  constructor() { }
  message = "this is message from sourse";
  @Output() messageEvent = new EventEmitter<String>();
  ngOnInit() {
  }
  sendMessage(){
    console.log("We From source!!!");
    this.messageEvent.emit(this.message);
  }
}
