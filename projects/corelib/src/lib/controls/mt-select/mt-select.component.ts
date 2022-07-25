import { Component, Input, OnInit } from '@angular/core';
import { MtSelectItem } from '../../models/mt-select-item';

@Component({
  selector: 'mt-select',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>{{ label }}</mat-label>
      <mat-select
        [disabled]="disabled"
        [multiple]="isMultipleSelection"
        [placeholder]="placeholder"
      >
        <mat-option
          *ngFor="let item of selectItems"
          [value]="item.value"
          [disabled]="item.disabled"
        >
          {{ item.label }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styleUrls: ['./mt-select.component.css'],
})
export class MtSelectComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() isMultipleSelection: boolean = false;
  @Input() placeholder: string = 'Select an option';
  @Input() label: string = 'Label';
  @Input() selectItems: MtSelectItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
