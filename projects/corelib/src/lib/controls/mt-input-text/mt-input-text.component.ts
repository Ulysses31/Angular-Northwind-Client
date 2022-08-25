import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
	ControlValueAccessor,
	NG_VALUE_ACCESSOR
} from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { noop } from 'rxjs';
import { MtInputAppearance } from '../../models/enums';

@Component({
	selector: 'mt-input-text',
	template: `
		<mat-form-field
			class="input-full-width"
			[appearance]="appearance">
			<mat-label>{{ label }}</mat-label>
			<input
				type="text"
				matInput
				[disabled]="disabled"
				[placeholder]="placeHolder"
				[readonly]="readonly"
				[(ngModel)]="value"
				(blur)="onBlur()"
				[required]="required"
				#input="ngModel" />
			<button
				[disabled]="disabled"
				*ngIf="value"
				matSuffix
				mat-icon-button
				aria-label="Clear"
				(click)="value = ''">
				<mat-icon>close</mat-icon>
			</button>
			<!-- <mat-hint>Errors appear instantly!</mat-hint> -->
			<mat-error *ngIf="input.errors?.['required']">
				Field is required
			</mat-error>
		</mat-form-field>
	`,
	styleUrls: ['./mt-input-text.component.css'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => MtInputTextComponent),
			multi: true
		}
	]
})
export class MtInputTextComponent
	implements OnInit, ControlValueAccessor
{
  @Input() disabled: boolean = false;
	@Input() label: string = 'Material Text Input';
	@Input() placeHolder: string = 'Material Text Input';
	@Input() readonly: boolean = false;
	@Input() appearance: MatFormFieldAppearance =
		MtInputAppearance.Legacy;
	@Input() required: boolean = false;

	private innerValue: any = '';

	constructor() {}

	ngOnInit(): void {}

	private onTouchedCallback: () => void = noop;
	private onChangeCallback: (_: any) => void = noop;

	get value(): any {
		return this.innerValue;
	}

	set value(val: any) {
		if (val !== this.innerValue) {
			this.innerValue = val;
			this.onChangeCallback(val);
		}
	}

	onBlur(): void {
		this.onTouchedCallback();
	}

	writeValue(value: any): void {
		if (value !== this.innerValue) {
			this.innerValue = value;
		}
	}

	registerOnChange(fn: any): void {
		this.onChangeCallback = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouchedCallback = fn;
	}
}
