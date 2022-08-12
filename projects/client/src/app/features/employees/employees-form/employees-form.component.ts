import { Component, EventEmitter } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { NgForm } from '@angular/forms';
import { EmployeesFormViewModelService } from './employees-form-viewmodel.service';

@Component({
  templateUrl: './Employees-form.component.html',
  styleUrls: ['./Employees-form.component.css']
})
export class EmployeesFormComponent extends AppBaseComponent {
  formTitle: string = 'Employees Form';
  frmStatus: EventEmitter<string | null> = new EventEmitter<string | null>;

  constructor(public VM: EmployeesFormViewModelService) {
    super();
    console.log('[OnInit EmployeesFormComponent]');
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
