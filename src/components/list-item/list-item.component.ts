import {Component, Input} from '@angular/core';
import {MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    MatListItem
  ],
  template: `
    <mat-list-item role="listitem" color="accent">
      <ng-content></ng-content>
    </mat-list-item>
  `,
  styles: [
    `
    `
  ]
})
export class ListItemComponent {
}
