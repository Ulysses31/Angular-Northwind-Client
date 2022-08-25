import { MtTableComponent } from './../../../../../../corelib/src/lib/controls/mt-table/mt-table.component';
import { Component, EventEmitter, ViewChild } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { NgForm } from '@angular/forms';
import { OrdersFullFormViewModelService } from './orders-full-form-viewmodel.service';
import { OrderDetailsDto } from '../../../models/order-detailsDto';

@Component({
  templateUrl: './orders-full-form.component.html',
  styleUrls: ['./orders-full-form.component.css']
})
export class OrdersFullFormComponent extends AppBaseComponent {
  formTitle: string = 'Orders Full Form';
  frmStatus: EventEmitter<string | null> = new EventEmitter<string | null>;
  dataLoaded: EventEmitter<OrderDetailsDto[]> = new EventEmitter<
		OrderDetailsDto[]
	>();
  displayedColumns: string[] = [
		'#',
		'OrderID',
		'ProductID',
		'UnitPrice',
		'Quantity',
		'Discount'
	];
  length: number = 0;

  @ViewChild('orderDetailsTable')
	  tableComp!: MtTableComponent;

  constructor(public VM: OrdersFullFormViewModelService) {
    super();
    console.log('[OnInit OrdersFullFormComponent]');
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.dataLoaded.subscribe((data) => {
      this.tableComp.matTableDs = data;
      this.tableComp.length = data.length;
    });
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    setTimeout(() => {
			this.dataLoaded.emit(
				this.VM.model?.OrderDetails as OrderDetailsDto[]
			);
		});
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  formStatus(frm: NgForm): void {
    this.frmStatus.emit(frm.status);
    frm.statusChanges?.subscribe((data) => this.frmStatus.emit(data));
  }
}
