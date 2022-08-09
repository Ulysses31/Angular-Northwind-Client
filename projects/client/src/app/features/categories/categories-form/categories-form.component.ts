import { Component } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { CategoriesFormViewModelService } from './categories-form-viewmodel.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent extends AppBaseComponent {
  formTitle: string = 'Categories Form';

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
    // const idx = this.VM.headerActions.findIndex((item) => item.id === 'save');
    // this.VM.headerActions[idx].disabled = !frm.valid;
    console.log(frm);
  }
}
