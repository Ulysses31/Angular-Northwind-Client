import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TerritoriesFormViewModelService } from './territories-form/territories-form-viewmodel.service';
import { TerritoriesFormComponent } from './territories-form/territories-form.component';
import { TerritoriesRoutingModule } from './territories-routing.module';
import { TerritoriesViewModelService } from './territories-viewmodel.service';
import { TerritoriesComponent } from './territories.component';
import { TerritoriesService } from './Territories.service';

@NgModule({
	declarations: [TerritoriesComponent, TerritoriesFormComponent],
	imports: [SharedModule, TerritoriesRoutingModule],
	providers: [
		TerritoriesService,
		TerritoriesViewModelService,
		TerritoriesFormViewModelService
	]
})
export class TerritoriesModule {}

