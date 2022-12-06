import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
})
export class BigCardComponent {

  @Input()
  coverImage:string = '';
  @Input()
  title:string = 'Angular Blog';
  @Input()
  description:string = 'A blog about Angular';
  @Input()
  link:string = 'https://josafa.com.br/blog';
  @Input()
  date:string = '2020-01-01';
}
