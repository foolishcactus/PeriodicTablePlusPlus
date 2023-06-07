import { Component, Input, inject} from '@angular/core';
import { ElementP } from '../elements';
import { CommonModule } from '@angular/common';
import { ElementService } from '../elements.service';

@Component({
  selector: 'app-element',
  template: `

    <div #myIdentifier class = "element h-full w-full" [ngStyle] = "{
      'background-color': this.elementService.getColor(element), 
      'border': '0.1px solid rgb(251,247,245)',
      'max-height': '100%',
    }">

      <p class = "atomicNumber row-start-1 col-start-1">{{element.atomicnumber}}</p>

      <div class = "flex justify-center row-start-2 col-start-2">
        <h1 class = "elementSymbol">
         {{element.symbol}}
        </h1>
      </div>
      
    </div>

    
    
    
    `,
  styleUrls: ['./element.component.scss'],
  standalone: true,
  imports: [CommonModule],
})

export class ElementComponent{
  @Input() element!: ElementP;
  @Input () mouseHover!: boolean;
  elementService: ElementService = inject(ElementService);
  
  constructor() {
    
  } 

}
