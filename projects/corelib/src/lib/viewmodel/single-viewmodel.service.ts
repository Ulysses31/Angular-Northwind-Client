import {
	Directive,
	OnDestroy,
	OnInit,
	AfterViewInit,
	Injector
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { MtBaseEntity } from '../models/base-entity';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MtDialogComponent } from '../controls/mt-dialog/mt-dialog.component';

@Directive()
export abstract class MtSingleViewModelService<
	TModel extends MtBaseEntity
> implements OnInit, AfterViewInit, OnDestroy
{
	model?: TModel | undefined;
	isNew: boolean | undefined;
	isBusy: boolean = false;
	toggleModelPre: boolean = false;
	backUrl: string | undefined;

	abstract getById(id: string): Observable<TModel>;
	abstract postDto(item: TModel): Observable<TModel>;
	abstract putDto(id: string, item: TModel): Observable<TModel>;
	abstract deleteDto(id: string): Observable<void>;
	abstract resetDto(item: TModel): Observable<TModel>;

	constructor(
		public injector: Injector,
		public dialog: MatDialog,
		public snackBar: MatSnackBar,
		public route: ActivatedRoute,
		public router: Router
	) {}

	ngOnInit(): void {
		this.backUrl = decodeURIComponent(
			this.route.snapshot.queryParams['backUrl']
		);
	}

	ngAfterViewInit(): void {}

	ngOnDestroy(): void {}

	public getModel(id: string): void {
		this.isBusy = true;
		this.getById(id)
    .subscribe({
			next: (result: any) => {
				// console.log(result.data);
				if (result.status === 500) {
					console.log(result.response.error);
					this.openSnackBar(
						`[${result.message}] - ${result.response.error}`,
						'Close'
					);
				} else {
					this.isBusy = false;
					this.model = result.data as TModel;
				}
			},
			error: (err) => {
				this.isBusy = false;
				this.openSnackBar(`[${err.name}] - ${err.message}`, 'Close');
				throw err;
			},
			complete: () => (this.isBusy = false)
		});
	}

	public performReset(): void {
		this.resetDto(this.model as TModel).subscribe({
			next: (result: any) => {
				// console.log(result);
				this.isBusy = false;
				this.model = result as TModel;
			},
			error: (err) => {
				this.isBusy = false;
				this.openSnackBar(`[${err.name}] - ${err.message}`, 'Close');
				throw err;
			},
			complete: () => (this.isBusy = false)
		});
	}

	public performSave(id: string): void {
		this.isBusy = true;
		if (id === '0') {
			this.postDto(this.model!).subscribe({
				next: (data: any) => {
					// console.log(data);
					if (data.status === 500) {
						console.log(data.response.error);
						this.openSnackBar(
							`[${data.message}] - ${data.response.error}`,
							'Close'
						);
					} else {
						this.openSnackBar('Successfully created!', 'Close');
						this.performReset();
					}
				},
				error: (err) => {
					this.isBusy = false;
					console.log(err);
					this.openSnackBar(
						`[${err.name}] - ${err.message}`,
						'Close'
					);
					throw err;
				},
				complete: () => (this.isBusy = false)
			});
		} else {
			this.putDto(id, this.model!).subscribe({
				next: (data: any) => {
					// console.log(data);
					if (data.status === 500) {
						console.log(data.response.error);
						this.openSnackBar(
							`[${data.message}] - ${data.response.error}`,
							'Close'
						);
					} else {
						this.openSnackBar('Successfully modified!', 'Close');
					}
				},
				error: (err) => {
					this.isBusy = false;
					this.openSnackBar(
						`[${err.name}] - ${err.message}`,
						'Close'
					);
					throw err;
				},
				complete: () => (this.isBusy = false)
			});
		}
	}

	public performDelete(id: string): void {
		// this.confirmationService.confirm({
		//	message: 'Are you sure that you want to delete it?',
		//	accept: () => {
		if (id) {
			this.confirmDialog(
				'Confirm',
				'Are you sure you want to delete it?'
			).subscribe((result: boolean) => {
				if (result) {
					this.isBusy = true;
					this.deleteDto(id).subscribe({
						next: (data: any) => {
							// console.log(data);
							if (data.status === 500) {
								console.log(data.response.error);
								this.openSnackBar(
									`[${data.message}] - ${data.response.error}`,
									'Close'
								);
							} else {
								this.openSnackBar('Successfully deleted!', 'Close');
								this.performReset();
							}
						},
						error: (err) => {
							this.isBusy = false;
							this.openSnackBar(
								`[${err.name}] - ${err.message}`,
								'Close'
							);
							throw err;
						},
						complete: () => (this.isBusy = false)
					});
				}
			});
		}
		//	}
		// });
	}

	public openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 5000
		});
	}

	public getTypes(data: any) {
		let tmpObj = {
			type: '',
			title: ''
		};
		for (const key in data[0]) {
			if (Object.prototype.hasOwnProperty.call(data[0], key)) {
				const element = data[0][key];
				tmpObj = {
					type: typeof element,
					title: key
				};
				console.log(Object.prototype.toString.call(element));
				if (
					Object.prototype.toString.call(element) === '[object Date]'
				) {
					console.log(key + ' is date');
				}
				console.log(tmpObj);
			}
		}
	}

	public extractFieldNameId(data: any): string {
		const vCnt = 0;
		for (const key in data[0]) {
			if (vCnt === 0) {
				if (Object.prototype.hasOwnProperty.call(data[0], key)) {
					// console.log(key);
					return key as string;
				}
			}
		}
		return '';
	}

	public confirmDialog(
		title: string,
		content: string
	): Observable<boolean> {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			title: title,
			content: content,
			choice: [true, false]
		};

		const dialogRef = this.dialog.open(
			MtDialogComponent,
			dialogConfig
		);

		return dialogRef.afterClosed();
	}
}
