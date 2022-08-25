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
import { TooltipPosition } from '@angular/material/tooltip';
import { Router, ActivatedRoute } from '@angular/router';
import { ImtActionToolbarItems } from '../../interfaces/mtActionToolbarItems';
import { MtBaseEntity } from '../../models/base-entity';
import { MaterialColor, ProgrBarMode } from '../../models/enums';
import { MtPagedListViewModelService } from '../../viewmodel/paged-list-viewmodel.service';

@Component({
	selector: 'mt-paged-list-full',
	template: `
		<!-- Progress -->
		<mt-progress [mode]="mode" *ngIf="this.VM?.isBusy"></mt-progress>
		<br />
		<!-- Progress -->

		<!-- Toolbar -->
		<div class="action-toolbar mat-elevation-z5">
			<mat-toolbar [color]="color">
				<span style="color: #bebebe">{{ gridTitle }}</span>
				<span class="example-spacer"></span>
				<button
					*ngFor="let btn of actionBarItems"
					mat-icon-button
					class="example-icon favorite-icon"
					aria-label="btn.id"
					[matTooltip]="btn.toolTipMessage"
					[matTooltipPosition]="tipPosition"
					[matTooltipShowDelay]="1000"
					(click)="btn?.command()">
					<mat-icon>{{ btn.icon }}</mat-icon>
				</button>
			</mat-toolbar>
		</div>
		<!-- Toolbar -->

		<!-- View Model -->
		<pre
			*ngIf="toggleViewModel"
			class="action-toolbar mat-elevation-z5"
			>{{ VM?.model | json }}
    </pre
		>
		<!-- View Model -->

		<!-- Table -->
		<div *ngIf="VM?.model">
			<div class="mat-elevation-z5">
				<table
					mat-table
					[dataSource]="matTableDs"
					matSort
					(matSortChange)="announceSortChange($event)"
					class="browser-table mat-elevation-z8">
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
								'background-color': element.checked
									? 'rgb(216, 216, 216, 0.1)'
									: ''
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
								>{{
									element[item] | date: 'dd/MM/yyyy hh:mm.ss'
								}}</span
							>
						</td>
					</ng-container>

					<tr
						mat-header-row
						*matHeaderRowDef="this.VM?.columnDefs"></tr>
					<tr
						mat-row
						matRipple
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
	`,
	styleUrls: ['./mt-paged-list-full.component.css']
})
export class MtPagedListFullComponent
	implements OnInit, AfterViewInit, OnDestroy
{
	readonly tipPosition: TooltipPosition = 'above';
	toggleViewModel: boolean = false;
	pageEvent?: PageEvent;
	@Input() VM?: MtPagedListViewModelService<MtBaseEntity>;
	@Input() disabled: boolean = false;
	@Input() gridTitle: string = '';
	@Input() pageSize: number = 5;
	@Input() pageSizeOptions: number[] = [5, 10, 25, 100];
	@Input() hasPagination: boolean = true;
	@Input() isSelectable: boolean = true;
	@Input() color: MaterialColor = MaterialColor.Primary;
	@Input() mode: ProgrBarMode = ProgrBarMode.Query;
	@Input() extraActionBarItems: ImtActionToolbarItems[] = [];
	@Input() actionBarItems: ImtActionToolbarItems[] = [
		{
			id: 'insert',
			icon: 'add',
			toolTipMessage: 'Insert new item',
			color: '',
			disabled: false,
			command: () => this.insertNewItem()
		},
		{
			id: 'edit',
			icon: 'edit',
			toolTipMessage: 'Edit selected item',
			color: '',
			disabled: false,
			command: () => this.editSelectedItem()
		},
		{
			id: 'refresh',
			icon: 'cached',
			toolTipMessage: 'Refresh data',
			color: 'black',
			disabled: false,
			command: () => {
				this.VM !== undefined ? (this.VM.isBusy = true) : undefined;
				this.VM?.search({}).subscribe((response: any) => {
					this.matTableDs.data = response.data;
					this.VM !== undefined
						? (this.VM.isBusy = false)
						: undefined;
				});
			}
		},
		{
			id: 'model',
			icon: 'build',
			toolTipMessage: 'View model',
			color: 'black',
			disabled: false,
			command: () => this.viewModel()
		}
	];

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

	constructor(
		private _liveAnnouncer: LiveAnnouncer,
		private router: Router,
		private route: ActivatedRoute
	) {
		console.log('[OnInit MtPagedListFullComponent]');
	}

	ngOnInit(): void {
		this.VM?.ngOnInit();
		this.matTableDs = new MatTableDataSource([]);
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
			this.actionBarItems.unshift(
				...this.extraActionBarItems
			);
		}, 1000);
	}

	ngOnDestroy(): void {
		this.VM?.ngOnDestroy();
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	public getSelected(sl: any, element: any) {
		this.selection.clear();
		this.matTableDs.data.forEach((row: any) => {
			if (row !== element) {
				row.checked = false;
			}
			if (element.checked) {
				this.selection.select(element);
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

	private editSelectedItem(): void {
		const url = this.getCurrentRouteUrl();
		if (this.selection.selected.length > 0) {
			this.selection.selected.map((item: any) => {
				if (item) {
					console.log(`Edit item: [${JSON.stringify(item)}]`);
					// console.log(this.selection.selected);
					let idName: string = this.VM?.extractFieldNameId([
						item
					]) as string;
					let id: string = item[idName];
					this.router.navigate([url, id], {
						queryParams: { backUrl: this.router.url }
					});
				}
			});
		} else {
			this.VM?.openSnackBar(this.VM?.snackEditMsg!, 'Close');
		}
	}

	private insertNewItem(): void {
		const url = this.getCurrentRouteUrl();
		this.router.navigate([url, 0], {
			queryParams: { backUrl: this.router.url }
		});
	}

	public viewModel(): void {
		this.toggleViewModel = !this.toggleViewModel;
	}

	private getCurrentRouteUrl(): string {
		const url: any = this.route.root.snapshot;
		return url._routerState.url;
	}
}
