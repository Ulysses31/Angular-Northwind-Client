import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTerritoriesFormComponent } from './employee-territories-form/employee-territories-form.component';
import { EmployeeTerritoriesComponent } from './employee-territories.component';

const routes: Routes = [
	{ path: '', component: EmployeeTerritoriesComponent },
	{ path: ':id', component: EmployeeTerritoriesFormComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EmployeeTerritoriesRoutingModule {}

