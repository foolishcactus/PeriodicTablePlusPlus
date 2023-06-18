import { Directive, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appWheel]',
  standalone: true,
})

export class WheelDirective{
  //output that stores either true or false. can be accessed from parent components
  @Output() wheelScroll = new EventEmitter<boolean>();

  constructor() {}


  //listens if the mouseleaves then returns false
  @HostListener('mouseout', ['$event']) mouseout(event){
      this.wheelScroll.emit(false);
  }
  //listes to mouse scroll wheel event
  @HostListener("mousewheel", ["$event"]) onMousewheel(event) {
    //prevents the default mouse zooming action done by browsers
    event.preventDefault();
      //if zooming in action then emits true
      if (event.wheelDelta > 0) {
        this.wheelScroll.emit(true);
      }  
      //if zooming out action then emits false
      if (event.wheelDelta < 0) {
       this.wheelScroll.emit(false);
      }
  }
}
