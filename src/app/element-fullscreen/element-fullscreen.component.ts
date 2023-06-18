import { Component, OnInit, Input, inject, Output, EventEmitter} from '@angular/core';
import { ElementP } from '../elements';
import {ElementService} from '../elements.service';
import { CommonModule } from '@angular/common';
import { WheelDirective } from '../wheel.directive';
import { zoomIn,zoomOut } from 'src/app/animations';

@Component({
  selector: 'app-element-fullscreen',
  templateUrl: './element-fullscreen.component.html',
  styleUrls: ['./element-fullscreen.component.scss'],
  standalone: true,
  imports: [CommonModule, WheelDirective],
  animations: [zoomIn, zoomOut],
})
export class ElementFullscreenComponent  implements OnInit {
  @Input() element!: ElementP;
  elementService: ElementService = inject(ElementService);
  constructor() { }
  @Output() wheelScrollData = new EventEmitter();

  ngOnInit() {
    console.log("Iam tryingto run this rn")
  }

  handleWheelScroll($event){
    if(!$event){
      console.log("we scroll out and are trying to close this");
      this.wheelScrollData.emit({isScrolled:false, element: this.elementService.getElement(-1, -1)});
    }
  }
}
