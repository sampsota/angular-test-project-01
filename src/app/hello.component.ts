import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name1}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name1: string;
}

@Component({
  selector: 'sam',
  template: `<h2>Sam is {{adjective}}</h2>`,
  styles: [`h1 {font-family: Lato;}`]
})
export class SamComponent {
  @Input() adjective: string;
}
