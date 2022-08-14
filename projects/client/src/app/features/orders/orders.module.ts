import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OrdersFormViewModelService } from './orders-form/orders-form-viewmodel.service';
import { OrdersFormComponent } from './orders-form/orders-form.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersViewModelService } from './orders-viewmodel.service';
import { OrdersComponent } from './orders.component';
import { OrdersService } from './orders.service';

@NgModule({
	declarations: [OrdersComponent, OrdersFormComponent],
	imports: [SharedModule, OrdersRoutingModule],
	providers: [
		OrdersService,
		OrdersViewModelService,
		OrdersFormViewModelService
	]
})
export class OrdersModule {}

