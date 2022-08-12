import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RegionsFormViewModelService } from './regions-form/regions-form-viewmodel.service';
import { RegionsFormComponent } from './regions-form/regions-form.component';
import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsViewModelService } from './regions-viewmodel.service';
import { RegionsComponent } from './regions.component';
import { RegionsService } from './regions.service';

@NgModule({
	declarations: [RegionsComponent, RegionsFormComponent],
	imports: [SharedModule, RegionsRoutingModule],
	providers: [
		RegionsService,
		RegionsViewModelService,
		RegionsFormViewModelService
	]
})
export class RegionsModule {}

