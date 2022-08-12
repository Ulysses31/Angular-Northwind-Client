import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeTerritoriesFormViewModelService } from './employee-territories-form/employee-territories-form-viewmodel.service';
import { EmployeeTerritoriesFormComponent } from './employee-territories-form/employee-territories-form.component';
import { EmployeeTerritoriesRoutingModule } from './employee-territories-routing.module';
import { EmployeeTerritoriesViewModelService } from './employee-territories-viewmodel.service';
import { EmployeeTerritoriesComponent } from './employee-territories.component';
import { EmployeeTerritoriesService } from './employee-territories.service';

@NgModule({
	declarations: [EmployeeTerritoriesComponent, EmployeeTerritoriesFormComponent],
	imports: [SharedModule, EmployeeTerritoriesRoutingModule],
	providers: [
		EmployeeTerritoriesService,
		EmployeeTerritoriesViewModelService,
		EmployeeTerritoriesFormViewModelService
	]
})
export class EmployeeTerritoriesModule {}

