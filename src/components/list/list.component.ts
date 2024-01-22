import {Component} from '@angular/core';
import {MatList} from "@angular/material/list";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatList
  ],
  template: `
    <mat-list role="list">
      <ng-content></ng-content>
    </mat-list>
  `,
  styles: ``
})
export class ListComponent {

}
