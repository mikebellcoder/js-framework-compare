import { Component, Input } from '@angular/core';

@Component({
  selector: 'square',
  template: `<button class="square">{{ value }}</button>`,
  styles: []
})
export class SquareComponent {
  @Input() value: null | string = '';
}
