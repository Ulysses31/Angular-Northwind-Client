import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import {
	AfterViewInit,
	Component,
	Input,
	OnDestroy,
	OnInit,
	ViewChild
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MtBaseEntity } from '../../models/base-entity';
import { MtPagedListViewModelService } from '../../viewmodel/paged-list-viewmodel.service';

@Component({
	selector: 'mt-paged-list-full',
	template: `
		<!-- Table -->
		<div *ngIf="VM?.model">
			<div class="mat-elevation-z8">
				<table
					mat-table
					[dataSource]="matTableDs"
					matSort
					(matSortChange)="announceSortChange($event)"
					class="mat-elevation-z8">
					<ng-container
						*ngFor="let item of this.VM?.columnDefs; let i = index"
						matColumnDef="{{ item }}">
						<th
							mat-header-cell
							*matHeaderCellDef
							mat-sort-header
							sortActionDescription="i">
							<b>{{ item | uppercase }}</b>
						</th>
						<td
							mat-cell
							*matCellDef="let element"
							[ngStyle]="{
								'background-color': element.checked ? '#f3f3f3' : ''
							}">
							<mat-checkbox
								#mtCheck
								*ngIf="isSelectable && i === 0"
								(change)="getSelected($event, element)"
								[(ngModel)]="element.checked">
							</mat-checkbox>
							<span
								*ngIf="item !== 'CreatedAt' && item !== 'UpdatedAt'"
								>{{ element[item] }}</span
							>
							<span
								*ngIf="item === 'CreatedAt' || item === 'UpdatedAt'"
								>{{ element[item] | date: 'dd/MM/yyyy' }}</span
							>
						</td>
					</ng-container>

					<tr
						mat-header-row
						*matHeaderRowDef="this.VM?.columnDefs"></tr>
					<tr
						mat-row
						*matRowDef="let row; columns: this.VM?.columnDefs"></tr>
				</table>
				<mat-paginator
					#paginator
					*ngIf="hasPagination"
					[disabled]="disabled"
					[length]="VM?.modelCount"
					[pageSize]="pageSize"
					[pageSizeOptions]="pageSizeOptions"
					(page)="pageEvent = $event"
					aria-label="Select page">
				</mat-paginator>
			</div>
		</div>
		<!-- Table -->
		<!-- <mt-table
      [dataSource]="$any(VM?.model)"
      [displayedColumns]="VM?.columnDefs"
      [length]="VM?.modelCount"
    >
    </mt-table> -->
		<pre>{{ VM?.model | json }}</pre>
	`,
	styleUrls: ['./mt-paged-list-full.component.css']
})
export class MtPagedListFullComponent
	implements OnInit, AfterViewInit, OnDestroy
{
	pageEvent?: PageEvent;
	@Input() VM?: MtPagedListViewModelService<MtBaseEntity>;
	// @Input() command: any;
	@Input() disabled: boolean = false;
	@Input() pageSize: number = 5;
	@Input() pageSizeOptions: number[] = [5, 10, 25, 100];
	@Input() hasPagination: boolean = true;
	@Input() isSelectable: boolean = true;

	@ViewChild(MatPaginator) paginator: MatPaginator = {
		pageSize: this.pageSize ? this.pageSize : 0,
		pageSizeOptions: this.pageSizeOptions,
		length: this.VM?.modelCount ? this.VM?.modelCount : 0
	} as MatPaginator;

	@ViewChild(MatSort) sort: MatSort = {} as MatSort;

	matTableDs: any;
	selection: any;
	selectedRows: [] = [];
	initialSelection = [];
	allowMultiSelect = true;
	oldChecked: boolean = false;

	constructor(private _liveAnnouncer: LiveAnnouncer) {
		console.log('[OnInit MtPagedListFullComponent]');
	}

	ngOnInit(): void {
		this.VM?.ngOnInit();
	}

	ngAfterViewInit(): void {
		this.VM?.ngAfterViewInit();
		setTimeout(() => {
			!this.isSelectable
				? this.VM?.columnDefs?.shift()
				: this.VM?.columnDefs;
			this.selection = new SelectionModel<any>(
				this.allowMultiSelect,
				this.initialSelection
			);
			this.matTableDs = new MatTableDataSource(this.VM?.model);
			this.matTableDs.paginator = this.paginator;
			this.matTableDs.sort = this.sort;
			this.matTableDs.selection = this.selection;
		});
	}

	ngOnDestroy(): void {
		this.VM?.ngOnDestroy();
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	public getSelected(sl: any, element: any) {
		this.matTableDs.data.forEach((row: any) => {
			if (row !== element) {
				row.checked = false;
			}
		});
	}

	public announceSortChange(sortState: any) {
		// This example uses English messages. If your application supports
		// multiple language, you would internationalize these strings.
		// Furthermore, you can customize the message to add additional
		// details about the values being sorted.
		if (sortState.direction) {
			console.log(`Sorted ${sortState.direction}ending`);
			this._liveAnnouncer.announce(
				`Sorted ${sortState.direction}ending`
			);
		} else {
			console.log('Sorting cleared');
			this._liveAnnouncer.announce('Sorting cleared');
		}
	}
}
