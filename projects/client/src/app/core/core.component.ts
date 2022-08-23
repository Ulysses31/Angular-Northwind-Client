import { isNgTemplate } from '@angular/compiler';
import {
	Component,
	EventEmitter,
	OnDestroy,
	OnInit,
	Output
} from '@angular/core';
import { Router } from '@angular/router';
import {
	MtSidebarMenuItem,
	SideNavMode,
	SideNavPosition
} from 'corelib';

@Component({
	selector: 'app-core',
	template: `
		<mat-drawer-container
			class="sidenav-container"
			[hasBackdrop]="hasBackdrop">
			<mat-drawer
				#drawer
				class="sidenav"
				[mode]="mode"
				[opened]="opened"
				[position]="position"
				(openedChange)="openedChanged($event)">
				<h3>Menu</h3>
				<hr style="border: 1px solid #e4e4e4" />
				<br />
				<ul>
					<li
						*ngFor="let menuItem of sidebarMenuItems"
						(click)="menuItem?.command(); drawer.close()">
						<mat-icon
							*ngIf="menuItem.active"
							style="float: left; margin: -2px 5px 0 0"
							>radio_button_checked</mat-icon
						>
						<mat-icon
							*ngIf="!menuItem.active"
							style="float: left; margin: -2px 5px 0 0"
							>radio_button_unchecked</mat-icon
						>
						{{ menuItem.text }}
					</li>
				</ul>
			</mat-drawer>
			<mat-drawer-content class="main-content">
				<!-- #### Main ### -->
				<app-menubar (isOn)="onOpened()"></app-menubar>
				<div style="margin: 20px 10px 10px 10px">
					<router-outlet></router-outlet>
				</div>
				<!-- #### Main ### -->
				<br />
			</mat-drawer-content>
		</mat-drawer-container>
	`,
	styles: ['']
})
export class CoreComponent implements OnInit, OnDestroy {
	hasBackdrop: boolean = true;
	opened: boolean = false;
	mode: SideNavMode = SideNavMode.Over;
	position: SideNavPosition = SideNavPosition.Start;
	openEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() openedChange: EventEmitter<boolean> =
		new EventEmitter<boolean>();
	sidebarMenuItems: MtSidebarMenuItem[] = [
		{
			text: 'Dashboard',
			active: false,
			command: () => {
				this.router.navigateByUrl('/');
			}
		},
		{
			text: 'Categories',
			active: false,
			command: () => {
				this.router.navigateByUrl('/categories');
			}
		},
		{
			text: 'Customers',
			active: false,
			command: () => {
				this.router.navigateByUrl('/customers');
			}
		},
		{
			text: 'Employees',
			active: false,
			command: () => {
				this.router.navigateByUrl('/employees');
			}
		},
		{
			text: 'Employee Territories',
			active: false,
			command: () => {
				this.router.navigateByUrl('/employee-territories');
			}
		},
		{
			text: 'Orders',
			active: false,
			command: () => {
				this.router.navigateByUrl('/orders');
			}
		},
		{
			text: 'Order Details',
			active: false,
			command: () => {
				this.router.navigateByUrl('/order-details');
			}
		},
		{
			text: 'Products',
			active: false,
			command: () => {
				this.router.navigateByUrl('/products');
			}
		},
		{
			text: 'Regions',
			active: false,
			command: () => {
				this.router.navigateByUrl('/regions');
			}
		},
		{
			text: 'Shippers',
			active: false,
			command: () => {
				this.router.navigateByUrl('/shippers');
			}
		},
		{
			text: 'Territories',
			active: false,
			command: () => {
				this.router.navigateByUrl('/territories');
			}
		}
	];

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.openedChange.subscribe((data: boolean) => console.log(data));
		this.openEmit.subscribe((data: boolean) => (this.opened = data));
	}

	ngOnDestroy(): void {
		this.openEmit.complete();
		this.openEmit.unsubscribe();
		this.openedChange.complete();
		this.openedChange.unsubscribe();
	}

	onOpened(): void {
		this.openEmit.emit((this.opened = !this.opened));
		this.parseCurrentUrl();
	}

	openedChanged(ev: boolean): void {
		this.openEmit.emit(ev);
		this.parseCurrentUrl();
	}

	parseCurrentUrl(): void {
		const url: string = this.router.url;
		this.clearMenuItems();
		switch (url) {
			case '/':
				this.sidebarMenuItems[0].active = true;
				break;
			case '/categories':
				this.sidebarMenuItems[1].active = true;
				break;
			case '/customers':
				this.sidebarMenuItems[2].active = true;
				break;
			case '/employees':
				this.sidebarMenuItems[3].active = true;
				break;
			case '/employee-territories':
				this.sidebarMenuItems[4].active = true;
				break;
			case '/orders':
				this.sidebarMenuItems[5].active = true;
				break;
			case '/order-details':
				this.sidebarMenuItems[6].active = true;
				break;
			case '/products':
				this.sidebarMenuItems[7].active = true;
				break;
			case '/regions':
				this.sidebarMenuItems[8].active = true;
				break;
			case '/shippers':
				this.sidebarMenuItems[9].active = true;
				break;
			case '/territories':
				this.sidebarMenuItems[10].active = true;
				break;
		}
	}

	private clearMenuItems() {
		this.sidebarMenuItems = this.sidebarMenuItems.map(
			(item: MtSidebarMenuItem) => {
				item.active = false;
				return item;
			}
		);
	}
}
