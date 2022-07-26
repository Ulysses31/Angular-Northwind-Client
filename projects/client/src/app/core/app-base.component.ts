import { NgForm } from '@angular/forms';
import {
	AfterViewInit,
	Directive,
	OnDestroy,
	OnInit,
	ViewChild
} from '@angular/core';
import { MtSingleFullComponent } from 'projects/corelib/src/public-api';

@Directive()
export abstract class AppBaseComponent
	implements OnInit, AfterViewInit, OnDestroy
{
	@ViewChild(MtSingleFullComponent, { static: true })
	singleEntity!: MtSingleFullComponent;

	abstract formStatus(frm: NgForm): void;

	constructor() {
		console.log('[OnInit AppBaseComponent]');
	}

	ngOnInit(): void {}

	ngAfterViewInit(): void {}

	ngOnDestroy(): void {}
}
