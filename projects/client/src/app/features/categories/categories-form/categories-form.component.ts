import { Component, EventEmitter } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { CategoriesFormViewModelService } from './categories-form-viewmodel.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent extends AppBaseComponent {
  formTitle: string = 'Categories Form';
  frmStatus: EventEmitter<string | null> = new EventEmitter<string | null>;

  constructor(public VM: CategoriesFormViewModelService) {
    super();
    console.log('[OnInit CategoriesFormComponent]');
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
