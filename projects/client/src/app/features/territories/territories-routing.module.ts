import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerritoriesFormComponent } from './territories-form/territories-form.component';
import { TerritoriesComponent } from './territories.component';

const routes: Routes = [
	{ path: '', component: TerritoriesComponent },
	{ path: ':id', component: TerritoriesFormComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TerritoriesRoutingModule {}

