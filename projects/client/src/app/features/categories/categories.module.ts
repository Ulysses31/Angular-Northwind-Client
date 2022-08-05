import { NgModule } from '@angular/core';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoriesViewModelService } from './categories-viewmodel.service';
import { CategoriesService } from './categories.service';


@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    SharedModule,
    CategoriesRoutingModule
  ],
  providers: [CategoriesViewModelService, CategoriesService]
})
export class CategoriesModule { }
