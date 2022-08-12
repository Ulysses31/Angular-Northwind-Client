import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { ShippersViewModelService } from './shippers-viewmodel.service';

@Component({
	selector: 'app-Shippers',
	templateUrl: './Shippers.component.html',
	styleUrls: ['./Shippers.component.css']
})
export class ShippersComponent extends AppBaseListComponent {
  gridTitle: string = 'Shippers';

	constructor(public VM: ShippersViewModelService) {
		super();
    console.log('[OnInit ShippersComponent]');
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

