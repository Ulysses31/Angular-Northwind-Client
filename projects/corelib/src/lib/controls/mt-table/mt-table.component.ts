import { MtBaseEntity } from 'projects/corelib/src/public-api';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'mt-table',
  template: `
    <div class="mat-elevation-z5">
      <table
        mat-table
        [dataSource]="matTableDs"
        matSort
        (matSortChange)="announceSortChange($event)"
        class="mat-elevation-z8"
      >
        <ng-container
          *ngFor="let item of displayedColumns; let i = index"
          matColumnDef="{{ item }}"
        >
          <th
            mat-header-cell
            *matHeaderCellDef
            mat-sort-header
            sortActionDescription="i"
          >
            <b>{{ item | uppercase }}</b>
          </th>
          <td
            mat-cell
            *matCellDef="let element"
            [ngStyle]="{ 'background-color': element.checked ? 'rgb(216, 216, 216, 0.1)' : '' }"
          >
            <mat-checkbox
              #mtCheck
              *ngIf="isSelectable && i === 0"
              (change)="getSelected($event, element)"
              [(ngModel)]="element.checked"
            >
            </mat-checkbox>
            {{ element[item] }}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr
          mat-row
          *matRowDef="let row; columns: displayedColumns"
        ></tr>
      </table>
      <mat-paginator
        #paginator
        *ngIf="hasPagination"
        [disabled]="disabled"
        [length]="length"
        [pageSize]="pageSize"
        [pageSizeOptions]="pageSizeOptions"
        (page)="pageEvent = $event"
        aria-label="Select page"
      >
      </mat-paginator>
    </div>
  `,
  styleUrls: ['./mt-table.component.css'],
})
export class MtTableComponent implements OnInit, AfterViewInit {
  pageEvent?: PageEvent;
  @Input() displayedColumns: string[] | undefined = [];
  @Input() dataSource?: any;
  @Input() command: any;
  @Input() disabled: boolean = false;
  @Input() length: number | undefined = 0;
  @Input() pageSize: number = 5;
  @Input() pageSizeOptions: number[] = [5, 10, 25, 100];
  @Input() hasPagination: boolean = true;
  @Input() isSelectable: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator = {
    pageSize: this.pageSize,
    pageSizeOptions: this.pageSizeOptions,
    length: this.length,
  } as MatPaginator;

  @ViewChild(MatSort) sort: MatSort = {} as MatSort;

  matTableDs: any;
  selection: any;
  selectedRows: [] = [];
  initialSelection = [];
  allowMultiSelect = true;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngAfterViewInit(): void {
    this.matTableDs.paginator = this.paginator;
    this.matTableDs.sort = this.sort;
  }

  ngOnInit(): void {
    !this.isSelectable ? this.displayedColumns?.shift() : this.displayedColumns;
    this.matTableDs = new MatTableDataSource(this.dataSource);
    this.selection = new SelectionModel<any>(
      this.allowMultiSelect,
      this.initialSelection
    );
    this.matTableDs.selection = this.selection;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public getSelected(sl: any, element: any) {
    this.selection.clear();
		this.matTableDs.forEach((row: any) => {
			if (row !== element) {
				row.checked = false;
			}
			if (element.checked) {
				this.selection.select(element);
			}
		});
    // this.matTableDs.data.forEach((row: any) => {
    //   if (row.id === element.id && sl.checked) {
    //     this.selection.select(row);
    //     this.selectedRows = this.selection.selected;
    //   }
    //   if (row.id === element.id && !sl.checked) {
    //     this.selectedRows = this.selection.selected.filter((item: any) => {
    //       return item.id !== element.id;
    //     });
    //   }
    // });
    // console.log(this.selectedRows);
  }

  public announceSortChange(sortState: any) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
