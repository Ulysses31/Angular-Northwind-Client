import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersFormComponent } from './orders-form/orders-form.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
	{ path: '', component: OrdersComponent },
	{ path: ':id', component: OrdersFormComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OrdersRoutingModule {}

