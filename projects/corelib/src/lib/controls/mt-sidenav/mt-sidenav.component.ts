import { SideNavPosition } from './../../models/enums';
import { Component, Input, OnInit } from '@angular/core';
import { SideNavMode } from '../../models/enums';

@Component({
  selector: 'mt-sidenav',
  template: `
    <mat-drawer-container
      class="sidenav-container"
      [hasBackdrop]="hasBackdrop"
    >
      <mat-drawer
        #drawer
        class="sidenav"
        [mode]="mode"
        [opened]="opened"
        [position]="position"
      >
        Drawer content
      </mat-drawer>
      <mat-drawer-content class="main-content">
        Main content
        <br/>
        <mt-button
          label="Toggle Sidenav"
          (click)="drawer.toggle()"
        >
          Toggle Sidenav
        </mt-button>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styleUrls: ['./mt-sidenav.component.css'],
})
export class MtSidenavComponent implements OnInit {
  @Input() mode: SideNavMode = SideNavMode.Over;
  @Input() hasBackdrop: boolean = false;
  @Input() opened: boolean = false;
  @Input() position: SideNavPosition = SideNavPosition.Start;

  constructor() {}

  ngOnInit(): void {}
}
