import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-slider',
  template: `
    <mat-slider
      aria-label="unit(s)"
      [disabled]="disabled"
      [color]="color"
      [vertical]="isVertical"
      thumbLabel
      tickInterval="1"
      [min]="min"
      [max]="max"
      [step]="step"
      [value]="value"
    ></mat-slider>
  `,
  styleUrls: ['./mt-slider.component.css'],
})
export class MtSliderComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() isVertical: boolean = false;
  @Input() color: ThemePalette = MaterialColor.Primary;
  @Input() min: number = 0;
  @Input() max: number = 0;
  @Input() step: number = 0;
  @Input() value: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
