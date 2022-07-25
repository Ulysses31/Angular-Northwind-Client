import { Component, OnInit, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MaterialColor, ProgrSpinnerMode } from '../../models/enums';

@Component({
  selector: 'mt-spinner',
  template: `
    <mat-progress-spinner
        [color]="color"
        [mode]="mode"
        [value]="value"
        [diameter]="diameter"
        [strokeWidth]="strokeWidth"
    >
    </mat-progress-spinner>
  `,
  styleUrls: ['./mt-spinner.component.css']
})
export class MtSpinnerComponent implements OnInit {
  @Input() color: MaterialColor = MaterialColor.Primary;
  @Input() mode: ProgressSpinnerMode = ProgrSpinnerMode.Determinate;
  @Input() value: number = 0;
  @Input() diameter: number = 0;
  @Input() strokeWidth: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
