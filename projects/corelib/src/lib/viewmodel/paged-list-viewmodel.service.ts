import {
	AfterViewInit,
	Directive,
	OnDestroy,
	OnInit
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from, Observable } from 'rxjs';
import { MtBaseEntity } from '../models/base-entity';
import { MtBaseSearchModel } from '../models/base-search-model';

@Directive()
export abstract class MtPagedListViewModelService<
	TModel extends MtBaseEntity
> implements OnInit, AfterViewInit, OnDestroy
{
	model: TModel[] = [];
	modelCount: number | undefined = 0;
	columnDefs?: any[] = [];
	public isBusy: boolean = false;

	readonly snackEditMsg?: string = 'Select an item to edit.';
	readonly snackDeleteMsg?: string = 'Select an item to delete.';

	abstract search(
		searchModel: MtBaseSearchModel
	): Observable<TModel[]>;
	abstract getById(id: string): Observable<TModel>;

	constructor(public snackBar: MatSnackBar) {
		console.log('[OnInit MtPagedListViewModelService]');
	}

	ngOnInit(): void {
		// Init Api Call
		this.gridInit();
	}

	ngAfterViewInit(): void {}

	ngOnDestroy(): void {}

	public gridInit(): void {
		console.log('[MtPagedListViewModelService gridInit ]');
		this.isBusy = true;
		this.search({}).subscribe({
			next: (result: any) => {
				console.log(result.data);
				this.generateGrid(result.data as TModel[]);
			},
			error: (err) => {
				this.isBusy = false;
				this.openSnackBar(`[${err.name}] - ${err.message}`, 'Close');
				throw err;
			},
			complete: () => (this.isBusy = false)
		});
	}

	public generateGrid(dto: TModel[]): void {
		from([dto])
			// .pipe(
			// 	map((data: any[]) => {
			//     dto = data.map((item: any) => {
			//       item.CreatedAt = new Date().toLocaleDateString('el-GR')
			//       return item;
			//     });
			//     return dto;
			//   })
			// )
			.subscribe({
				next: (data: TModel[]) => {
					// Generate table headers
					this.columnDefs = Object.getOwnPropertyNames(data[0]) as [];
					this.columnDefs.unshift('#');

					this.model = data;
					this.modelCount = this.model.length;

					this.getTypes(data);

					// console.log(this.columnDefs);
					// console.log(data);
				},
				error: (err) => {
					this.openSnackBar(
						`[${err.name}] - ${err.message}`,
						'Close'
					);
					throw err;
				}
			});
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
				// console.log(tmpObj);
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
}
