import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippersFormComponent } from './shippers-form/shippers-form.component';
import { ShippersComponent } from './shippers.component';

const routes: Routes = [
	{ path: '', component: ShippersComponent },
	{ path: ':id', component: ShippersFormComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ShippersRoutingModule {}

