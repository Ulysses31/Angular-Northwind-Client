import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button',
  template: `
    <button
      mat-button
      [color]="color"
      [disabled]="disabled"
      [matTooltip]="toolTipMessage"
      [matTooltipPosition]="tipPosition"
      [matTooltipShowDelay]="1000"
      (click)="command()"
    >
    <mat-icon *ngIf="icon">{{ icon }}</mat-icon> {{label}}
  </button>
  `,
  styleUrls: ['./mt-button.component.css']
})
export class MtButtonComponent implements OnInit {
  @Input() command?: any;
  @Input() label: string = 'Basic';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() color: MaterialColor = MaterialColor.Basic
  @Input() toolTipMessage: string = '';
  tipPosition: TooltipPosition = 'above';

  constructor() { }

  ngOnInit(): void {
  }

}
