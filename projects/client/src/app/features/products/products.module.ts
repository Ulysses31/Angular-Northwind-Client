import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProductsFormViewModelService } from './products-form/products-form-viewmodel.service';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsViewModelService } from './products-viewmodel.service';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

@NgModule({
	declarations: [ProductsComponent, ProductsFormComponent],
	imports: [SharedModule, ProductsRoutingModule],
	providers: [
		ProductsService,
		ProductsViewModelService,
		ProductsFormViewModelService
	]
})
export class ProductsModule {}

