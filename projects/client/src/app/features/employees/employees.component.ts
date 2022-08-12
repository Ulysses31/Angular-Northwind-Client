import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { EmployeesViewModelService } from './employees-viewmodel.service';

@Component({
	selector: 'app-Employees',
	templateUrl: './Employees.component.html',
	styleUrls: ['./Employees.component.css']
})
export class EmployeesComponent extends AppBaseListComponent {
  gridTitle: string = 'Employees';

	constructor(public VM: EmployeesViewModelService) {
		super();
    console.log('[OnInit EmployeesComponent]');
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
}

