import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxDefaultOptions, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { CheckboxLabelPlace, MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-checkbox',
  template: `
    <mat-checkbox
      [disabled]="disabled"
      [labelPosition]="labelPosition"
      [checked]="checked"
      [color]="color"
    >
      {{label}}
    </mat-checkbox>
  `,
  styleUrls: ['./mt-checkbox.component.css'],
  // When user clicks on the mat-checkbox,
  // the default behavior is toggle checked value and set indeterminate to false.
  // This behavior can be customized by providing a new value of
  // MAT_CHECKBOX_DEFAULT_OPTIONS to the checkbox.
  // providers: [
  //   {
  //     provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
  //     useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions
  //   }
  // ]
})
export class MtCheckboxComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() labelPosition: CheckboxLabelPlace = CheckboxLabelPlace.After;
  @Input() color: MaterialColor = MaterialColor.Warn;
  @Input() label: string = 'Check me!';

  constructor() { }

  ngOnInit(): void {
  }

}
