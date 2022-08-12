import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { EmployeesFormViewModelService } from './employees-form/employees-form-viewmodel.service';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesViewModelService } from './employees-viewmodel.service';
import { EmployeesComponent } from './employees.component';
import { EmployeesService } from './employees.service';

@NgModule({
	declarations: [EmployeesComponent, EmployeesFormComponent],
	imports: [SharedModule, EmployeesRoutingModule],
	providers: [
		EmployeesService,
		EmployeesViewModelService,
		EmployeesFormViewModelService
	]
})
export class EmployeesModule {}

