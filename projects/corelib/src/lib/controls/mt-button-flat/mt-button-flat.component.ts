import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button-flat',
  template: `
    <button
      mat-flat-button
      [color]="color"
      [disabled]="disabled"
      [matTooltip]="toolTipMessage"
      [matTooltipPosition]="tipPosition"
      [matTooltipShowDelay]="1000"
      (click)="command()"
    >
    <mat-icon>{{ icon }}</mat-icon> {{label}}
  </button>
  `,
  styleUrls: ['./mt-button-flat.component.css']
})
export class MtButtonFlatComponent implements OnInit {
  @Input() command?: any;
  @Input() label: string = 'Flat';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() color: MaterialColor = MaterialColor.Basic
  @Input() toolTipMessage: string = '';
  tipPosition: TooltipPosition = 'above';

  constructor() { }

  ngOnInit(): void {
  }

}
