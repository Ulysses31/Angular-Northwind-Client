import { MtRadioItem } from './../../models/mt-radio-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-radio',
  template: `
    <mat-radio-group
      aria-label="Select an option"
      [disabled]="disabled"
    >
      <mat-radio-button
        *ngFor="let item of radioItems"
        [value]="item.value"
      >
        {{ item.label }}
      </mat-radio-button>
    </mat-radio-group>
  `,
  styleUrls: ['./mt-radio.component.css'],
})
export class MtRadioComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() radioItems: MtRadioItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
