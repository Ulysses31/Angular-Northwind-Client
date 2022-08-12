import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { ProductsViewModelService } from './products-viewmodel.service';

@Component({
	selector: 'app-Products',
	templateUrl: './Products.component.html',
	styleUrls: ['./Products.component.css']
})
export class ProductsComponent extends AppBaseListComponent {
  gridTitle: string = 'Products';

	constructor(public VM: ProductsViewModelService) {
		super();
    console.log('[OnInit ProductsComponent]');
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

