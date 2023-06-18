import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ElementP} from '../elements';
import { WheelDirective } from '../wheel.directive';
import { ElementFullscreenComponent } from '../element-fullscreen/element-fullscreen.component';
import { TableComponent } from '../table/table.component';
import { zoomIn, zoomOut } from '../animations';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, WheelDirective, ElementFullscreenComponent, TableComponent],
  animations: [zoomIn, zoomOut],
})
export class HomeComponent{
  elementList: ElementP[] = [];
  enableFullScreenElement:boolean;
  fullScreenElement: ElementP;

  constructor() { 
  }

  handleWheelScrollData($event){
    this.enableFullScreenElement = $event.isScrolled;
    this.fullScreenElement = $event.element;
  }
}
