import { Component, EventEmitter } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { NgForm } from '@angular/forms';
import { RegionsFormViewModelService } from './regions-form-viewmodel.service';

@Component({
  templateUrl: './Regions-form.component.html',
  styleUrls: ['./Regions-form.component.css']
})
export class RegionsFormComponent extends AppBaseComponent {
  formTitle: string = 'Regions Form';
  frmStatus: EventEmitter<string | null> = new EventEmitter<string | null>;

  constructor(public VM: RegionsFormViewModelService) {
    super();
    console.log('[OnInit RegionsFormComponent]');
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
