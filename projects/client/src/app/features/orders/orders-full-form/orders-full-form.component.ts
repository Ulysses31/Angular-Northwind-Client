import { TooltipPosition } from '@angular/material/tooltip';
import { Component, EventEmitter, Input, ViewChild } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { NgForm } from '@angular/forms';
import { OrdersFullFormViewModelService } from './orders-full-form-viewmodel.service';
import { OrderDetailsDto } from '../../../models/order-detailsDto';
import { ImtActionToolbarItems, MaterialColor, MtTableComponent } from 'corelib';
import { Router } from '@angular/router';

@Component({
  templateUrl: './orders-full-form.component.html',
  styleUrls: ['./orders-full-form.component.css']
})
export class OrdersFullFormComponent extends AppBaseComponent {
  formTitle: string = 'Orders Full Form';
  frmStatus: EventEmitter<string | null> = new EventEmitter<string | null>;
  readonly tipPosition: TooltipPosition = 'above';
  readonly color: MaterialColor = MaterialColor.Primary;
  @Input() actionBarItems: ImtActionToolbarItems[] = [
		{
			id: 'back',
			icon: 'arrow_back',
			toolTipMessage: 'Back to browser',
			color: '',
			disabled: false,
			command: () => {
				this.router.navigate([this.VM?.backUrl]);
			}
		}
	];
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

  constructor(
    public VM: OrdersFullFormViewModelService,
    private router: Router
  ) {
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
