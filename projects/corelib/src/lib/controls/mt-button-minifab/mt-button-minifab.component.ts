import { Component, Input, OnInit } from '@angular/core';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button-minifab',
  template: `
    <button
      mat-mini-fab
      [color]="color"
      [disabled]="disabled"
      (click)="command()"
    >
    <mat-icon>{{icon}}</mat-icon>
  </button>
  `,
  styleUrls: ['./mt-button-minifab.component.css']
})
export class MtButtonMinifabComponent implements OnInit {
  @Input() command?: any;
  @Input() icon: string = 'home';
  @Input() disabled: boolean = false;
  @Input() color: MaterialColor = MaterialColor.Basic

  constructor() { }

  ngOnInit(): void {
  }

}
