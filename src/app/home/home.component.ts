import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ElementComponent} from '../element/element.component';
import {ElementService} from '../elements.service';
import {ElementP} from '../elements';
import { WheelDirective } from '../wheel.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `

  <div class = "appgrid w-full h-full">
    <div class="tableContainer">
      <div class = "periodContainer" *ngFor = "let period of periods; let i = index" [ngStyle] = "{'grid-row-start': i + 1}">
        <ng-container *ngFor = "let group of groups">

        <app-element
        *ngIf = "elementExists(period, group); else emptyDivElement" 
        class = "elements hoverControl w-full h-full" 
        [element] = "this.elementService.getElement(period, group)" 
        (mouseover) = "mouseHover = true" 
        (mouseout) = "mouseHover = false" 
        [mouseHover] = "this.mouseHover" 
        
        >
        </app-element>

        <ng-template  #emptyDivElement>
          <div class = "fillerDiv"></div>
        </ng-template>

        </ng-container> 
      </div>
      <input appWheel type="text" value="Ctrl + mouse scroll wheel" />

    </div>
  </div>
  `,
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, ElementComponent, WheelDirective]
})
export class HomeComponent  implements OnInit {
  elementList: ElementP[] = [];
  periods: number[] = [];
  groups: number[] = [];
  elementService: ElementService = inject(ElementService);
  mouseHover: boolean;
 


  constructor() { 
    this.periods = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,17, 18];
    this.mouseHover = false;
  }
  ngOnInit() {this.elementList = this.elementService.getAllElements();}

  elementExists(period: number, group: number): boolean{
    if(this.elementService.getElement(period, group).name === "No Element Found"){
      return false
    }else {
      return true;
    }
  }

  

  
}
