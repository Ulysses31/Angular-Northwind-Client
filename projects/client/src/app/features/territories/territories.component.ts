import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { TerritoriesViewModelService } from './territories-viewmodel.service';

@Component({
	selector: 'app-Territories',
	templateUrl: './Territories.component.html',
	styleUrls: ['./Territories.component.css']
})
export class TerritoriesComponent extends AppBaseListComponent {
  gridTitle: string = 'Territories';

	constructor(public VM: TerritoriesViewModelService) {
		super();
    console.log('[OnInit TerritoriesComponent]');
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

