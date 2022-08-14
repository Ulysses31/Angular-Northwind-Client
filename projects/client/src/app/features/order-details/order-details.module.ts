import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OrderDetailsFormViewModelService } from './order-details-form/order-details-form-viewmodel.service';
import { OrderDetailsFormComponent } from './order-details-form/order-details-form.component';
import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderDetailsViewModelService } from './order-details-viewmodel.service';
import { OrderDetailsComponent } from './order-details.component';
import { OrderDetailsService } from './order-details.service';

@NgModule({
	declarations: [OrderDetailsComponent, OrderDetailsFormComponent],
	imports: [SharedModule, OrderDetailsRoutingModule],
	providers: [
		OrderDetailsService,
		OrderDetailsViewModelService,
		OrderDetailsFormViewModelService
	]
})
export class OrderDetailsModule {}

