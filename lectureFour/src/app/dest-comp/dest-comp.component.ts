import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dest-comp',
  templateUrl: './dest-comp.component.html',
  styleUrls: ['./dest-comp.component.css']
})
export class DestCompComponent implements OnInit {
  @Input() message: any;
  constructor() { }

  ngOnInit() {
  }

}
