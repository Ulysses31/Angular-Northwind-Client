import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
	AfterViewInit,
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	TemplateRef,
	ViewChild
} from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { ImtActionToolbarItems } from '../../interfaces/mtActionToolbarItems';
import { MtBaseEntity } from '../../models/base-entity';
import { MaterialColor, ProgrBarMode } from '../../models/enums';
import { MtSingleViewModelService } from '../../viewmodel/single-viewmodel.service';

@Component({
	selector: 'mt-single-full',
	template: `
		<!-- Progress -->
		<mt-progress [mode]="mode" *ngIf="this.VM?.isBusy"></mt-progress>
		<br />
		<!-- Progress -->

		<!-- Toolbar -->
		<div class="action-toolbar mat-elevation-z5">
			<mat-toolbar [color]="color">
				<span style="color: #bebebe">{{ formTitle }}</span>
				<span class="example-spacer"></span>
				<button
					*ngFor="let btn of actionBarItems"
					mat-icon-button
					class="example-icon favorite-icon"
					aria-label="btn.id"
					[matTooltip]="btn.toolTipMessage"
					[matTooltipPosition]="tipPosition"
					[matTooltipShowDelay]="1000"
					(click)="btn?.command()"
          [disabled]="btn.disabled"
        >
					<mat-icon [ngStyle]="{ 'color': btn.color }">{{
						btn.icon
					}}</mat-icon>
				</button>
			</mat-toolbar>
		</div>
		<!-- Toolbar -->

		<!-- View Model -->
		<pre
			*ngIf="toggleViewModel"
			class="action-toolbar mat-elevation-z5"
			>{{ VM?.model | json }}
    </pre
		>
		<!-- View Model -->
	`,
	styleUrls: ['./mt-single-full.component.css']
})
export class MtSingleFullComponent
	implements OnInit, AfterViewInit, OnDestroy
{
	readonly tipPosition: TooltipPosition = 'above';
	toggleViewModel: boolean = false;
	@Input() VM?: MtSingleViewModelService<MtBaseEntity>;
	@Input() color: MaterialColor = MaterialColor.Basic;
	@Input() mode: ProgrBarMode = ProgrBarMode.Query;
	@Input() formTitle: string = '';
  @Input() formStatus?: EventEmitter<string | null>;
	@Input() actionBarItems: ImtActionToolbarItems[] = [
		{
			id: 'back',
			icon: 'arrow_back',
			toolTipMessage: 'Back to browser',
      color: 'black',
      disabled: false,
			command: () => {
				this.router.navigate([this.VM?.backUrl]);
			}
		},
		{
			id: 'save',
			icon: 'save',
			toolTipMessage: 'Save',
      color: 'yellowgreen',
      disabled: true,
			command: () => {
				var id: string = this.getIdfromRoute();
				this.VM?.performSave(id);
			}
		},
		{
			id: 'delete',
			icon: 'delete',
			toolTipMessage: 'Delete',
      color: 'orangered',
      disabled: false,
			command: () => {
				var id: string = this.getIdfromRoute();
				this.VM?.performDelete(id);
			}
		},
		{
			id: 'refresh',
			icon: 'cached',
			toolTipMessage: 'Refresh data',
      color: 'black',
      disabled: false,
			command: () => this.callGetModel()
		},
		{
			id: 'model',
			icon: 'build',
			toolTipMessage: 'View model',
			color: 'black',
      disabled: false,
			command: () => this.viewModel()
		}
	];

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.VM?.ngOnInit();
		this.callGetModel();

    this.formStatus?.subscribe((data) => {
      // console.log(data);
      if(data === 'INVALID') {
        this.actionBarItems[1].disabled = true;
      } else {
        this.actionBarItems[1].disabled = false;
      }
    });
	}

	ngAfterViewInit(): void {
		this.VM?.ngAfterViewInit();
	}

	ngOnDestroy(): void {
		this.VM?.ngOnDestroy();
	}

	public viewModel(): void {
		this.toggleViewModel = !this.toggleViewModel;
	}

	private callGetModel(): void {
		this.route.params.subscribe((data: any) => {
			if (parseInt(data.id) > 0) {
				this.VM?.getModel(data.id);
			} else {
				this.VM?.performReset();
			}
		});
	}

	private getIdfromRoute(): string {
		var id: string = '';
		this.route.params.subscribe((data: any) => {
			id = data.id as string;
		});
		return id;
	}
}
