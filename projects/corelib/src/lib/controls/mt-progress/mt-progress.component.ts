import { MaterialColor, ProgrBarMode } from './../../models/enums';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-progress',
  template: `
    <mat-progress-bar
      [color]="color"
      [mode]="mode"
      [value]="value"
      [bufferValue]="bufferValue"
    >
    </mat-progress-bar>
  `,
  styleUrls: ['./mt-progress.component.css'],
})
export class MtProgressComponent implements OnInit {
  @Input() color: MaterialColor = MaterialColor.Primary;
  @Input() mode: ProgrBarMode = ProgrBarMode.Determinate;
  @Input() value: number = 0;
  @Input() bufferValue: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
