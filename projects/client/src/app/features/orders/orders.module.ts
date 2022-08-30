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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [
		OrdersComponent,
		OrdersFormComponent,
		OrdersFullFormComponent
	],
	imports: [
		SharedModule,
		OrdersRoutingModule,
		MatToolbarModule,
		MatIconModule,
    MatTooltipModule
	],
	providers: [
		OrdersService,
		OrdersFullService,
		OrdersViewModelService,
		OrdersFormViewModelService,
		OrdersFullFormViewModelService
	]
})
export class OrdersModule {}
