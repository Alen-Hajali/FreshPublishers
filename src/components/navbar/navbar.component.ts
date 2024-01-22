import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    NgOptimizedImage
  ],
  template: `
    <mat-toolbar [style.background-color]="'#282828'">
      <img ngSrc="assets/icons/fp-logo.svg" alt="fp-logo" width="120" height="60"/>
    </mat-toolbar>
  `,
  styles: ``
})
export class NavbarComponent {

}
