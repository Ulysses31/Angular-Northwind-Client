import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CustomersFormViewModelService } from './customers-form/customers-form-viewmodel.service';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersViewModelService } from './customers-viewmodel.service';
import { CustomersComponent } from './customers.component';
import { CustomersService } from './customers.service';

@NgModule({
	declarations: [CustomersComponent, CustomersFormComponent],
	imports: [SharedModule, CustomersRoutingModule],
	providers: [
		CustomersService,
		CustomersViewModelService,
		CustomersFormViewModelService
	]
})
export class CustomersModule {}

