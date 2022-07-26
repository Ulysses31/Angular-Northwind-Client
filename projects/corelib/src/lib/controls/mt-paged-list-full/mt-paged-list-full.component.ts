import {
	AfterViewInit,
	Component,
	Input,
	OnDestroy,
	OnInit
} from '@angular/core';
import { MtBaseEntity } from '../../models/base-entity';
import { MtPagedListViewModelService } from '../../viewmodel/paged-list-viewmodel.service';

@Component({
	selector: 'lib-mt-paged-list-full',
	template: ` <p>mt-paged-list-full works!</p> `,
	styleUrls: ['./mt-paged-list-full.component.css']
})
export class MtPagedListFullComponent
	implements OnInit, AfterViewInit, OnDestroy
{
	@Input() VM?: MtPagedListViewModelService<MtBaseEntity>;

	constructor() {
		console.log('[OnInit MtPagedListFullComponent]');
	}

	ngOnInit(): void {
    this.VM?.ngOnInit();
  }

	ngAfterViewInit(): void {
    this.VM?.ngAfterViewInit();
	}

	ngOnDestroy(): void {
		this.VM?.ngOnDestroy();
	}
}

