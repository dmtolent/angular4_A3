import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  displayOn: boolean = false;
  clickArray = [];
  constructor() { }

  ngOnInit() {
  }
  onToggleDisplay(){
    this.displayOn = !this.displayOn; //to toggle display
    this.clickArray.push(this.clickArray.length + 1); //increment array on every toggle
  }

}
