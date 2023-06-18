import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementComponent} from '../element/element.component';
import {ElementService} from '../elements.service';
import {ElementP} from '../elements';
import { WheelDirective } from '../wheel.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [CommonModule, ElementComponent, WheelDirective],
  standalone: true,
})
export class TableComponent  implements OnInit {
  elementList: ElementP[] = [];
  periods: number[] = [];
  groups: number[] = [];
  elementService: ElementService = inject(ElementService);
  wheelScroll: boolean;
  @Output() wheelScrollData = new EventEmitter();

  constructor() { 
    this.periods = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,17, 18];
    this.wheelScroll = false;
  }
  ngOnInit() {this.elementList = this.elementService.getAllElements();}

  elementExists(period: number, group: number): boolean{
    if(this.elementService.getElement(period, group).name === "No Element Found"){
      return false
    }else {
      return true;
    }
  }

  handleElementScroll($event:boolean, period:number, group:number){
    if($event){
      this.wheelScrollData.emit({isScrolled: true, element:this.elementService.getElement(period, group)}); 
    }else{
    
    }
  }

}
