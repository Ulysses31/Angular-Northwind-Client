import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { NgModule } from '@angular/core';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoriesViewModelService } from './categories-viewmodel.service';
import { CategoriesService } from './categories.service';
import { CategoriesFormViewModelService } from './categories-form/categories-form-viewmodel.service';

@NgModule({
	declarations: [CategoriesComponent, CategoriesFormComponent],
	imports: [SharedModule, CategoriesRoutingModule],
	providers: [
		CategoriesService,
		CategoriesViewModelService,
		CategoriesFormViewModelService
	]
})
export class CategoriesModule {}

