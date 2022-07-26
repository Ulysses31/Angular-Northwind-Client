import {
	AfterViewInit,
	Directive,
	OnDestroy,
	OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { MtBaseEntity } from '../models/base-entity';
import { MtBaseSearchModel } from '../models/base-search-model';

@Directive()
export abstract class MtPagedListViewModelService<
	TModel extends MtBaseEntity
> implements OnInit, AfterViewInit, OnDestroy
{
	model?: TModel[] = [];
	selectedModel?: TModel | undefined;
	modelStruct?: string[] = [];
	label: string | undefined;
	rowData: Observable<any> | undefined;
	isBusy: boolean = false;
	isShowFilters: boolean = true;
	toggleModelPre: boolean = false;

	abstract search(
		searchModel: MtBaseSearchModel
	): Observable<TModel[]>;
	abstract getById(id: string): Observable<TModel>;

	constructor() {}

	ngOnInit(): void {
		// Init Api Call
		// this.gridInit();
	}

	ngAfterViewInit(): void {}

	ngOnDestroy(): void {}

	// private gridInit(): void {
	//   this.isBusy = true;
	//   this.search({})
	//     .subscribe({
	//       next: (data: TModel[]) => {
	//         this.model = data;
	//         this.generateGrid(data);
	//       },
	//       error: (err) => {
	//         this.isBusy = false;
	//         this.userMessage('error', err.name, err.message);
	//         throw err;
	//       },
	//       complete: () => (this.isBusy = false),
	//     });
	// }

	// private generateGrid(data: TModel[]): void {
	//   from([data])
	//     .pipe(
	//       tap(() => {
	//         this.columnDefs = [{ field: '', checkboxSelection: true, width: 50 }];
	//         Object.getOwnPropertyNames(data[0]).map((header: string) =>
	//           this.columnDefs.push({
	//             field: header,
	//             sortable: true,
	//             filter: true,
	//             resizable: true,
	//           })
	//         );
	//       })
	//     )
	//     .subscribe({
	//       next: (data: any) => {
	//         this.modelStruct = data && Object.getOwnPropertyNames(data[0]);
	//         this.rowData = data as Observable<TModel[]>;
	//         console.log(Object.getOwnPropertyNames(data[0]));

	//        this.getTypes(data);

	//       },
	//     });
	// }

	// private getTypes(data: any) {
	//   let tmpObj = {
	//     type: '',
	//     title: ''
	//   }
	//   for (const key in data[0]) {
	//     if (Object.prototype.hasOwnProperty.call(data[0], key)) {
	//       const element = data[0][key];
	//       tmpObj = {
	//         type: typeof element,
	//         title: key,
	//       }
	//       console.log(tmpObj);
	//     }
	//   }
	// }
}
