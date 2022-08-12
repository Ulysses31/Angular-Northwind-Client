import { Component, EventEmitter } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { NgForm } from '@angular/forms';
import { EmployeeTerritoriesFormViewModelService } from './employee-territories-form-viewmodel.service';

@Component({
  templateUrl: './employee-territories-form.component.html',
  styleUrls: ['./employee-territories-form.component.css']
})
export class EmployeeTerritoriesFormComponent extends AppBaseComponent {
  formTitle: string = 'EmployeeTerritories Form';
  frmStatus: EventEmitter<string | null> = new EventEmitter<string | null>;

  constructor(public VM: EmployeeTerritoriesFormViewModelService) {
    super();
    console.log('[OnInit EmployeeTerritoriesFormComponent]');
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
