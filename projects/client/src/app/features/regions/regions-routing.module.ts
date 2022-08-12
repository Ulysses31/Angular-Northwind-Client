import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsFormComponent } from './regions-form/regions-form.component';
import { RegionsComponent } from './regions.component';

const routes: Routes = [
	{ path: '', component: RegionsComponent },
	{ path: ':id', component: RegionsFormComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RegionsRoutingModule {}

