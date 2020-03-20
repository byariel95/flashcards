import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = '#1976D2';
    element.nativeElement.style.color = 'white';
   }

}
