import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription, MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-expandable-card',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatExpansionPanelDescription,
    CommonModule
  ],
  template: `
    <mat-accordion>
      <mat-expansion-panel [hideToggle]="!descriptionContent.children.length" (opened)="onOpened()">
        <mat-expansion-panel-header>
          <mat-panel-title>
            <ng-content select="[title]"></ng-content>
          </mat-panel-title>
        </mat-expansion-panel-header>
        <mat-panel-description #descriptionContent>
          <ng-content select="[description]"></ng-content>
        </mat-panel-description>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [``]
})
export class ExpandableCardComponent {
  @Output() cardOpened = new EventEmitter<void>()

  onOpened(): void {
    this.cardOpened.emit()
  }
}
