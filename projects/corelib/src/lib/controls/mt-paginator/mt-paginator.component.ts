import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mt-paginator',
  template: `
    <mat-paginator
      [disabled]="disabled"
      [length]="length"
      [pageSize]="pageSize"
      [pageSizeOptions]="pageSizeOptions"
      (page)="pageEvent = $event"
      aria-label="Select page"
    >
    </mat-paginator>
  `,
  styleUrls: ['./mt-paginator.component.css'],
})
export class MtPaginatorComponent implements OnInit {
  pageEvent?: PageEvent;
  @Input() disabled: boolean = false;
  @Input() length: number = 0;
  @Input() pageSize: number = 0;
  @Input() pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor() {}

  ngOnInit(): void {}
}
