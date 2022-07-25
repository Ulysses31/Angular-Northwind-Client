import { MtChipContent } from './../../interfaces/mtChipContent';
import { Component, Input, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


export interface Fruit {
  name: string;
}

@Component({
  selector: 'mt-chips',
  template: `
    <mat-form-field class="mat-chip-list" appearance="fill">
      <mat-label>{{ label }}</mat-label>
      <mat-chip-list #chipList aria-label="Selection" [disabled]="disabled">
        <mat-chip
          *ngFor="let item of chipContent"
          (removed)="remove(item)"
        >
          {{ item[chipValue] }}
          <button matChipRemove>
            <mat-icon>cancel</mat-icon>
          </button>
        </mat-chip>
        <input [placeholder]="placeHolderInput"
          [matChipInputFor]="chipList"
          [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
          [matChipInputAddOnBlur]="addOnBlur"
          (matChipInputTokenEnd)="add($event)">
      </mat-chip-list>
    </mat-form-field>
  `,
  styleUrls: ['./mt-chips.component.css']
})
export class MtChipsComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  @Input() label: string = 'Material Chip';
  @Input() placeHolderInput: string = 'Enter a text';
  @Input() chipContent: any[] = [];
  @Input() chipValue: any;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) this.chipContent = [...this.chipContent, { name: value }];

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(item: any): void {
    const index = this.chipContent.indexOf(item);

    if (index >= 0) this.chipContent.splice(index, 1);
  }

}
