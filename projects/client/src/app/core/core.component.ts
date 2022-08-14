import {
	Component,
	EventEmitter,
	OnDestroy,
	OnInit,
	Output
} from '@angular/core';
import { Router } from '@angular/router';
import { SideNavMode, SideNavPosition } from 'corelib';
import { MtSidebarMenuItem } from 'dist/corelib/lib/interfaces/mtSidebarMenuItems';

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
						{{ menuItem.text }}
					</li>
				</ul>
			</mat-drawer>
			<mat-drawer-content
				class="main-content"
				style="background-color: #fff">
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
			command: () => {
				this.router.navigateByUrl('/');
			}
		},
		{
			text: 'Categories',
			command: () => {
				this.router.navigateByUrl('/categories');
			}
		},
    {
			text: 'Customers',
			command: () => {
				this.router.navigateByUrl('/customers');
			}
		},
    {
			text: 'Employees',
			command: () => {
				this.router.navigateByUrl('/employees');
			}
		},
    {
			text: 'Employee Territories',
			command: () => {
				this.router.navigateByUrl('/employee-territories');
			}
		},
    {
			text: 'Orders',
			command: () => {
				this.router.navigateByUrl('/orders');
			}
		},
    {
			text: 'Order Details',
			command: () => {
				this.router.navigateByUrl('/order-details');
			}
		},
    {
			text: 'Products',
			command: () => {
				this.router.navigateByUrl('/products');
			}
		},
    {
			text: 'Regions',
			command: () => {
				this.router.navigateByUrl('/regions');
			}
		},
    {
			text: 'Shippers',
			command: () => {
				this.router.navigateByUrl('/shippers');
			}
		},
    {
			text: 'Territories',
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
	}

	openedChanged(ev: boolean): void {
		this.openEmit.emit(ev);
	}
}
