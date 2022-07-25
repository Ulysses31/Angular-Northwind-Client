import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button-fab',
  template: `
    <button
      mat-fab
      [color]="color"
      [disabled]="disabled"
      [matTooltip]="toolTipMessage"
      [matTooltipPosition]="tipPosition"
      [matTooltipShowDelay]="1000"
      (click)="command()"
    >
    <mat-icon>{{icon}}</mat-icon>
  </button>
  `,
  styleUrls: ['./mt-button-fab.component.css']
})
export class MtButtonFabComponent implements OnInit {
  @Input() command?: any;
  @Input() icon: string = 'home';
  @Input() disabled: boolean = false;
  @Input() color: MaterialColor = MaterialColor.Basic
  @Input() toolTipMessage: string = '';
  tipPosition: TooltipPosition = 'above';

  constructor() { }

  ngOnInit(): void {
  }

}
