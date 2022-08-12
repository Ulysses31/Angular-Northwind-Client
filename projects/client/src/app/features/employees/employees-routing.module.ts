import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
	{ path: '', component: EmployeesComponent },
	{ path: ':id', component: EmployeesFormComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EmployeesRoutingModule {}

