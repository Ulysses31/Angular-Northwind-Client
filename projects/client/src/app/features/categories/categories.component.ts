import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { CategoriesViewModelService } from './categories-viewmodel.service';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.css']
})
export class CategoriesComponent extends AppBaseListComponent {
  gridTitle: string = 'Categories';

	constructor(public VM: CategoriesViewModelService) {
		super();
    console.log('[OnInit CategoriesComponent]');
	}

	override ngOnInit(): void {
    super.ngOnInit();
  }

	override ngAfterViewInit(): void {
		super.ngAfterViewInit();
	}

	override ngOnDestroy(): void {
		super.ngOnDestroy();
	}
}

