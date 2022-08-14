import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsFormComponent } from './order-details-form/order-details-form.component';
import { OrderDetailsComponent } from './order-details.component';

const routes: Routes = [
	{ path: '', component: OrderDetailsComponent },
	{ path: ':id', component: OrderDetailsFormComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OrderDetailsRoutingModule {}

