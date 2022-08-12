import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { CustomersViewModelService } from './customers-viewmodel.service';

@Component({
	selector: 'app-Customers',
	templateUrl: './Customers.component.html',
	styleUrls: ['./Customers.component.css']
})
export class CustomersComponent extends AppBaseListComponent {
  gridTitle: string = 'Customers';

	constructor(public VM: CustomersViewModelService) {
		super();
    console.log('[OnInit CustomersComponent]');
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

