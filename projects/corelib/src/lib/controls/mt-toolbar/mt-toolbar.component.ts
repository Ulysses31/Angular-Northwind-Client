import { MaterialColor } from './../../models/enums';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mt-toolbar',
  template: `
    <mat-toolbar [color]="color">
      <button
        mat-icon-button
        class="example-icon"
        (click)="changeIsOpen()"
      >
        <mat-icon>menu</mat-icon>
      </button>
      <!-- <button
        mat-icon-button
        class="example-icon"
        aria-label="Example icon-button with menu icon"
        [matMenuTriggerFor]="menu"
      >
        <mat-icon>menu</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>
          <mat-icon>share</mat-icon> Share
        </button>
        <button mat-menu-item>
          <mat-icon>phonelink_setup</mat-icon> Phone Setup
        </button>
      </mat-menu> -->
      <span>{{ title }}</span>
      <span class="example-spacer"></span>
      <button
        mat-icon-button
        class="example-icon favorite-icon"
        aria-label="Settings"
      >
        <mat-icon>settings</mat-icon>
      </button>
      <button
        mat-icon-button
        class="example-icon"
        aria-label="User"
      >
        <mat-icon>person</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styleUrls: ['./mt-toolbar.component.css'],
})
export class MtToolbarComponent implements OnInit, OnDestroy {
  @Input() title: string = 'Application';
  @Input() color: MaterialColor = MaterialColor.Basic;
  @Output() isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.isOpen.complete();
    this.isOpen.unsubscribe();
  }

  changeIsOpen(): void {
    this.isOpen.emit(true);
  }

}
