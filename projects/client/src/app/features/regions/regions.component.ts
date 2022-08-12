import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { RegionsViewModelService } from './regions-viewmodel.service';

@Component({
	selector: 'app-Regions',
	templateUrl: './Regions.component.html',
	styleUrls: ['./Regions.component.css']
})
export class RegionsComponent extends AppBaseListComponent {
  gridTitle: string = 'Regions';

	constructor(public VM: RegionsViewModelService) {
		super();
    console.log('[OnInit RegionsComponent]');
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

