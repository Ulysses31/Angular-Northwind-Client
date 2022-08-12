import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { EmployeeTerritoriesViewModelService } from './employee-territories-viewmodel.service';

@Component({
	selector: 'app-EmployeeTerritories',
	templateUrl: './employee-territories.component.html',
	styleUrls: ['./employee-territories.component.css']
})
export class EmployeeTerritoriesComponent extends AppBaseListComponent {
  gridTitle: string = 'Employee Territories';

	constructor(public VM: EmployeeTerritoriesViewModelService) {
		super();
    console.log('[OnInit EmployeeTerritoriesComponent]');
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

