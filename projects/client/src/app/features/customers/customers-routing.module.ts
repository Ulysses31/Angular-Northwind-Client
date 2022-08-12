import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
	{ path: '', component: CustomersComponent },
	{ path: ':id', component: CustomersFormComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CustomersRoutingModule {}

