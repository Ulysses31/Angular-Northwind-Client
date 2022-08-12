import { Component, EventEmitter } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { NgForm } from '@angular/forms';
import { ShippersFormViewModelService } from './shippers-form-viewmodel.service';

@Component({
  templateUrl: './Shippers-form.component.html',
  styleUrls: ['./Shippers-form.component.css']
})
export class ShippersFormComponent extends AppBaseComponent {
  formTitle: string = 'Shippers Form';
  frmStatus: EventEmitter<string | null> = new EventEmitter<string | null>;

  constructor(public VM: ShippersFormViewModelService) {
    super();
    console.log('[OnInit ShippersFormComponent]');
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
