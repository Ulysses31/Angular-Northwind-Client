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
			{
				path: 'regions',
				loadChildren: () =>
					import('../features/regions/regions.module').then(
						(m) => m.RegionsModule
					)
			},
			{
				path: 'shippers',
				loadChildren: () =>
					import('../features/shippers/shippers.module').then(
						(m) => m.ShippersModule
					)
			},
      {
				path: 'territories',
				loadChildren: () =>
					import('../features/territories/territories.module').then(
						(m) => m.TerritoriesModule
					)
			},
      {
				path: 'customers',
				loadChildren: () =>
					import('../features/customers/customers.module').then(
						(m) => m.CustomersModule
					)
			},
      {
				path: 'employees',
				loadChildren: () =>
					import('../features/employees/employees.module').then(
						(m) => m.EmployeesModule
					)
			},
      {
				path: 'employee-territories',
				loadChildren: () =>
					import('../features/employee-territories/employee-territories.module').then(
						(m) => m.EmployeeTerritoriesModule
					)
			},
      {
				path: 'products',
				loadChildren: () =>
					import('../features/products/products.module').then(
						(m) => m.ProductsModule
					)
			},
			{ path: '**', redirectTo: '' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule {}
