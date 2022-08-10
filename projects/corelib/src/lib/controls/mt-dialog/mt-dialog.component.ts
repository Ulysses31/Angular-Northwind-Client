import { Component, OnInit, Inject, Optional } from '@angular/core';
import {
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'mat-dialog',
	template: `
		<h2 mat-dialog-title>{{title}}</h2>
		<mat-dialog-content class="mat-typography">
			 {{content}}
		</mat-dialog-content>
		<mat-dialog-actions align="end">
			<button mat-button [mat-dialog-close]="data.choice[0]">Yes</button>
			<button mat-button [mat-dialog-close]="data.choice[1]" cdkFocusInitial>
				No
			</button>
		</mat-dialog-actions>
	`,
	styleUrls: ['./mt-dialog.component.css']
})
export class MtDialogComponent {
	title: string = 'Install Angular';
	content: string = 'Material dialog content';

	constructor(
		private dialogRef: MatDialogRef<MtDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
	) {
    this.title = data.title;
    this.content = data.content;
  }

	ngOnInit(): void {}

	close() {
		this.dialogRef.close();
	}
}
