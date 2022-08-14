import { Component, EventEmitter } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { NgForm } from '@angular/forms';
import { OrderDetailsFormViewModelService } from './order-details-form-viewmodel.service';

@Component({
  templateUrl: './order-details-form.component.html',
  styleUrls: ['./order-details-form.component.css']
})
export class OrderDetailsFormComponent extends AppBaseComponent {
  formTitle: string = 'Order Details Form';
  frmStatus: EventEmitter<string | null> = new EventEmitter<string | null>;

  constructor(public VM: OrderDetailsFormViewModelService) {
    super();
    console.log('[OnInit OrderDetailsFormComponent]');
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  formStatus(frm: NgForm): void {
    this.frmStatus.emit(frm.status);
    frm.statusChanges?.subscribe((data) => this.frmStatus.emit(data));
  }
}
