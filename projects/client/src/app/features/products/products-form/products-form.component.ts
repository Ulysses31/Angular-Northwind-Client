import { Component, EventEmitter } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { NgForm } from '@angular/forms';
import { ProductsFormViewModelService } from './products-form-viewmodel.service';

@Component({
  templateUrl: './Products-form.component.html',
  styleUrls: ['./Products-form.component.css']
})
export class ProductsFormComponent extends AppBaseComponent {
  formTitle: string = 'Products Form';
  frmStatus: EventEmitter<string | null> = new EventEmitter<string | null>;

  constructor(public VM: ProductsFormViewModelService) {
    super();
    console.log('[OnInit ProductsFormComponent]');
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
