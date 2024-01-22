import {Component} from '@angular/core';
import {MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    MatListItem
  ],
  template: `
    <mat-list-item role="listitem" class="list-item">
      <ng-content></ng-content>
    </mat-list-item>
  `,
  styles: [
    `
      .list-item {
        background-color: rgba(40, 40, 40, 0.15);
      }
    `
  ]
})
export class ListItemComponent {
}
