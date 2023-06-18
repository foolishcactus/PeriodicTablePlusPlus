import { trigger, transition, style, animate, query, state, keyframes } from '@angular/animations';

const enterTransition = transition(':enter', [
  animate('700ms ease-in-out',  keyframes([
    style({transform: 'scale(0)'}),
    style({transform: 'scale(1.1)'}),
    style({transform: 'scale(1)'}),
  ]))
  ]);
  
  const leaveTrans = transition(':leave', [
    animate('700ms ease-in-out',  keyframes([
      style({transform: 'scale(1)'}),
      style({transform: 'scale(1.1)'}),
      style({transform: 'scale(0)'})
    ]))
  ])
  
  export const zoomIn = trigger('zoomIn', [
    enterTransition
  ]);
  
  export const zoomOut = trigger('zoomOut', [
    leaveTrans
  ]);