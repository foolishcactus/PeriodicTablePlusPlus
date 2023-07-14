import { Component, Input, inject, OnInit, OnChanges} from '@angular/core';
import { ElementP } from '../../../elements';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../../elements.service';
import { WheelDirective } from '../../../wheel.directive';
import { ElementFullscreenComponent } from '../element-fullscreen/element-fullscreen.component';


@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
  standalone: true,
  imports: [CommonModule, WheelDirective, ElementFullscreenComponent],
})

export class ElementComponent{
  @Input() element: ElementP | null = null;
  elementService: ElementService = inject(ElementService);
  wheelScroll:boolean;
  
  constructor() {
    this.wheelScroll = false;
  } 

}
