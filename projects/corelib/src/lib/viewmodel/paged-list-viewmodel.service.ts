import {
	AfterViewInit,
	Directive,
	OnDestroy,
	OnInit
} from '@angular/core';
import { from, map, Observable, tap } from 'rxjs';
import { MtBaseEntity } from '../models/base-entity';
import { MtBaseSearchModel } from '../models/base-search-model';

@Directive()
export abstract class MtPagedListViewModelService<
	TModel extends MtBaseEntity
> implements OnInit, AfterViewInit, OnDestroy
{
	model: TModel[] = [];
  modelCount: number | undefined  = 0;
  columnDefs?: any[] = [];
	//selectedModel?: TModel | undefined;
	//modelStruct?: string[] = [];
	//label: string | undefined;
	//rowData: Observable<any> | undefined;
	isBusy: boolean = false;
	//isShowFilters: boolean = true;
	//toggleModelPre: boolean = false;

	abstract search(
		searchModel: MtBaseSearchModel
	): Observable<TModel[]>;
	abstract getById(id: string): Observable<TModel>;

	constructor() {
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
				// this.userMessage('error', err.name, err.message);
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
				}
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
}
