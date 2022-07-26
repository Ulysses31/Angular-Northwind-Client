import {
  Directive,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MtPagedListFullComponent } from 'corelib';

@Directive()
export abstract class AppBaseListComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(MtPagedListFullComponent) baseList!: MtPagedListFullComponent;

  constructor() {
    console.log('[OnInit AppBaseListComponent]');
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}
}
