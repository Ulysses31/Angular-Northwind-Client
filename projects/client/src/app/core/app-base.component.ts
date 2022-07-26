import {
	AfterViewInit,
	Directive,
	OnDestroy,
	OnInit,
	ViewChild
} from '@angular/core';
import { MtSingleFullComponent } from 'corelib';

@Directive()
export abstract class AppBaseComponent
	implements OnInit, AfterViewInit, OnDestroy
{
	@ViewChild(MtSingleFullComponent, { static: true })
	singleEntity!: MtSingleFullComponent;

	constructor() {
		console.log('[OnInit AppBaseComponent]');
	}

	ngOnInit(): void {}

	ngAfterViewInit(): void {}

	ngOnDestroy(): void {}
}
