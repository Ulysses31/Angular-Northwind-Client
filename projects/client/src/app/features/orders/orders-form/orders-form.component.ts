import { Component, EventEmitter } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { NgForm } from '@angular/forms';
import { OrdersFormViewModelService } from './orders-form-viewmodel.service';

@Component({
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.css']
})
export class OrdersFormComponent extends AppBaseComponent {
  formTitle: string = 'Orders Form';
  frmStatus: EventEmitter<string | null> = new EventEmitter<string | null>;

  constructor(public VM: OrdersFormViewModelService) {
    super();
    console.log('[OnInit OrdersFormComponent]');
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
