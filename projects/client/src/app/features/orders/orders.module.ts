import { OrdersFullService } from './orders-full-form/orders-full.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OrdersFormViewModelService } from './orders-form/orders-form-viewmodel.service';
import { OrdersFormComponent } from './orders-form/orders-form.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersViewModelService } from './orders-viewmodel.service';
import { OrdersComponent } from './orders.component';
import { OrdersService } from './orders.service';
import { OrdersFullFormViewModelService } from './orders-full-form/orders-full-form-viewmodel.service';
import { OrdersFullFormComponent } from './orders-full-form/orders-full-form.component';

@NgModule({
	declarations: [OrdersComponent, OrdersFormComponent, OrdersFullFormComponent],
	imports: [SharedModule, OrdersRoutingModule],
	providers: [
		OrdersService,
    OrdersFullService,
		OrdersViewModelService,
		OrdersFormViewModelService,
    OrdersFullFormViewModelService
	]
})
export class OrdersModule {}

