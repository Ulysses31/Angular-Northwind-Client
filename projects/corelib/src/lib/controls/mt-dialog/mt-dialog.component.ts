// import { Component, OnInit, Input, Inject } from '@angular/core';
// import { MtDialogActionsContent } from '../../interfaces/mtDialogActionsContent';
// import { MaterialBtnAlign } from '../../models/enums';

// @Component({
//   selector: 'mt-dialog',
//   template: `
//     <h2 mat-dialog-title>{{title}}</h2>
//     <mat-dialog-content class="mat-typography" *ngIf="content">
//       {{content}}
//     </mat-dialog-content>
//     <mat-dialog-actions align="end">
//       <button mat-button mat-dialog-close>OK</button>
//       <button mat-button mat-dialog-close cdkFocusInitial>
//       CANCEL
//       </button>
//     </mat-dialog-actions>
//   `,
//   styleUrls: ['./mt-dialog.component.css']
// })
// export class MtDialogComponent implements OnInit {
//   @Input() title: string = 'Install Angular';
//   @Input() content: string = 'Material dialog content';
//   @Input() dialogAction: MtDialogActionsContent = {
//     aling: MaterialBtnAlign.Start,
//     buttons: [
//       {
//         text: 'Cancel',
//       },
//       {
//         text: 'Install',
//       },
//     ],
//   };

//   constructor(
//     //public dialog: MatDialog
//     //public dialogRef: MatDialogRef<MtDialogComponent>,
//     // @Inject(MAT_DIALOG_DATA) public data: DialogData,
//   ) {}


//   ngOnInit(): void {
//   }

//   // openDialog(): void {
//   //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//   //     width: '250px',
//   //    // data: {name: this.name, animal: this.animal},
//   //   });
//   // }

//   onNoClick(): void {
//     //this.dialogRef.close();
//   }
// }
