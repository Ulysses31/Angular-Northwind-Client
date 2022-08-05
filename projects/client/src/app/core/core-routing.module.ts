import { CoreComponent } from './core.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: CoreComponent,
		children: [
			{
				path: 'categories',
				loadChildren: () =>
					import('../features/categories/categories.module').then(
						(m) => m.CategoriesModule
					)
			},
			{ path: '**', redirectTo: 'posts' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule {}
