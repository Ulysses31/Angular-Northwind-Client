import { ShippersService } from './shippers.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ShippersFormViewModelService } from './shippers-form/shippers-form-viewmodel.service';
import { ShippersFormComponent } from './shippers-form/shippers-form.component';
import { ShippersRoutingModule } from './shippers-routing.module';
import { ShippersViewModelService } from './shippers-viewmodel.service';
import { ShippersComponent } from './shippers.component';

@NgModule({
	declarations: [ShippersComponent, ShippersFormComponent],
	imports: [SharedModule, ShippersRoutingModule],
	providers: [
		ShippersService,
		ShippersViewModelService,
		ShippersFormViewModelService
	]
})
export class ShippersModule {}

