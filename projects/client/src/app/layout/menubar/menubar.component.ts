import {
	Component,
	OnInit,
	AfterViewInit,
	OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
	selector: 'app-menubar',
	templateUrl: './menubar.component.html',
	styleUrls: ['./menubar.component.css']
})
export class MenuBarComponent
	implements OnInit, AfterViewInit, OnDestroy
{
  public appTitle: string = 'Northwind Client';
  @Output() isOn: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		setTimeout(() => {});
	}

	ngOnDestroy(): void {}

  onCall(): void {
    this.isOn.emit(true);
  }
}
