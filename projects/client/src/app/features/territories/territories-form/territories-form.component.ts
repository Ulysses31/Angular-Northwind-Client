import { Component, EventEmitter } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { NgForm } from '@angular/forms';
import { TerritoriesFormViewModelService } from './territories-form-viewmodel.service';

@Component({
  templateUrl: './Territories-form.component.html',
  styleUrls: ['./Territories-form.component.css']
})
export class TerritoriesFormComponent extends AppBaseComponent {
  formTitle: string = 'Territories Form';
  frmStatus: EventEmitter<string | null> = new EventEmitter<string | null>;

  constructor(public VM: TerritoriesFormViewModelService) {
    super();
    console.log('[OnInit TerritoriesFormComponent]');
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
