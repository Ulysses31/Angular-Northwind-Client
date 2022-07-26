import {
	Directive,
	OnDestroy,
	OnInit,
	AfterViewInit,
	Injector
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MtBaseEntity } from '../models/base-entity';

@Directive()
export abstract class MtSingleViewModelService<
	TModel extends MtBaseEntity
> implements OnInit, AfterViewInit, OnDestroy
{
	model?: TModel | undefined;
	isNew: boolean | undefined;
	label: string | undefined;
	// message: Message | undefined;
	isBusy: boolean = false;
	// headerActions: NgHeaderAction[] = [];
	toggleModelPre: boolean = false;
	backUrl: string | undefined;
	// dialogMessageContent: DialogMessageEntity = {
	//   display: false,
	//   title: 'Message',
	//   content: '',
	//   hasBtnUrl: false,
	// };

	abstract getById(id: string): Observable<TModel>;

	protected route: ActivatedRoute;
	protected router: Router;
	// protected confirmationService: ConfirmationService;

	protected abstract resetCb: (item: TModel) => Observable<TModel>;
	protected abstract postCb: (item: TModel) => Observable<TModel>;
	protected abstract putCb: (
		id: string,
		item: TModel
	) => Observable<TModel>;
	protected abstract deleteCb: (id: string) => Observable<void>;

	constructor(public injector: Injector) {
		this.route = injector.get<ActivatedRoute>(ActivatedRoute);
		this.router = injector.get<Router>(Router);
		// this.confirmationService =
		//  injector.get<ConfirmationService>(ConfirmationService);
	}

	ngOnInit(): void {
		this.backUrl = decodeURIComponent(
			this.route.snapshot.queryParams['backUrl']
		);
		// this.headerActions.push(
		//   {
		//     id: 'back',
		//     icon: 'pi pi-arrow-circle-left',
		//     iconPosition: 'left',
		//     label: 'Back',
		//     ngClass: 'p-button-raised p-button-sm p-button-warning',
		//     visible: true,
		//     command: () => this.router.navigate([this.backUrl]),
		//   },
		//   {
		//     id: 'new',
		//     icon: 'pi pi-plus',
		//     iconPosition: 'left',
		//     label: 'New',
		//     ngClass: 'p-button-raised p-button-sm p-button-success',
		//     visible: true,
		//     command: () => this.performReset(),
		//   },
		//   {
		//     id: 'save',
		//     icon: 'pi pi-save',
		//     iconPosition: 'left',
		//     label: 'Save',
		//     ngClass: 'p-button-raised p-button-sm p-button-success',
		//     visible: true,
		//     command: () => this.performSave(),
		//   },
		//   {
		//     id: 'delete',
		//     icon: 'pi pi-trash',
		//     iconPosition: 'left',
		//     label: 'Delete',
		//     ngClass: 'p-button-raised p-button-sm p-button-danger',
		//     visible: true,
		//     command: () => this.performDelete(),
		//   },
		//   {
		//     id: 'refresh',
		//     icon: 'pi pi-refresh',
		//     iconPosition: 'left',
		//     label: 'Refresh',
		//     ngClass: 'p-button-raised p-button-sm p-button-info',
		//     visible: true,
		//     command: () => this.getModel(),
		//   },
		//   {
		//     id: 'model',
		//     icon: 'pi pi-id-card',
		//     iconPosition: 'left',
		//     label: 'Model',
		//     ngClass: 'p-button-raised p-button-sm p-button-danger',
		//     visible: true,
		//     command: () => (this.toggleModelPre = !this.toggleModelPre),
		//   }
		// );

		// get the model
		// this.getModel();
	}

	ngAfterViewInit(): void {}

	ngOnDestroy(): void {}

	// private getModel(): void {
	// 	const idx = this.headerActions.findIndex(
	// 		(item) => item.id === 'save'
	// 	);
	// 	this.isBusy = true;
	// 	this.route.params
	// 		.pipe(switchMap(({ id }) => this.getById(id)))
	// 		.subscribe({
	// 			next: (data: TModel) => {
	// 				console.log(data);
	// 				this.isBusy = false;
	// 				this.model = data;
	// 				if (this.headerActions[idx].disabled) {
	// 					this.headerActions[idx].disabled = false;
	// 				}
	// 			},
	// 			error: (err) => {
	// 				this.isBusy = false;
	// 				this.userMessage('error', err.name, err.message);
	// 				throw err;
	// 			},
	// 			complete: () => (this.isBusy = false)
	// 		});
	// }

	// private performReset(): void {
	// 	const idx = this.headerActions.findIndex(
	// 		(item) => item.id === 'save'
	// 	);
	// 	of(null)
	// 		.pipe(switchMap(() => this.resetCb(this.model!)))
	// 		.subscribe({
	// 			next: (data: TModel) => {
	// 				this.model = data;
	// 				if (!this.headerActions[idx].disabled) {
	// 					this.headerActions[idx].disabled = true;
	// 				}
	// 			}
	// 		});
	// }

	// private performSave(): void {
	// 	this.isBusy = true;
	// 	if (this.model?.id === '0') {
	// 		this.postCb(this.model).subscribe({
	// 			next: () => this.handleSuccessInsert(),
	// 			error: (err) => console.log(err),
	// 			complete: () => (this.isBusy = false)
	// 		});
	// 	} else {
	// 		this.putCb(this.model?.id!, this.model!).subscribe({
	// 			next: () => this.handleSuccessUpdate(),
	// 			error: (err) => console.log(err),
	// 			complete: () => (this.isBusy = false)
	// 		});
	// 	}
	// }

	// private performDelete(): void {
	// 	this.confirmationService.confirm({
	// 		message: 'Are you sure that you want to delete it?',
	// 		accept: () => {
	// 			if (this.model?.id) {
	// 				this.isBusy = true;
	// 				this.deleteCb(this.model.id).subscribe({
	// 					next: () => this.handleSuccessDelete(),
	// 					error: (err) => console.log(err),
	// 					complete: () => (this.isBusy = false)
	// 				});
	// 			}
	// 		}
	// 	});
	// }

	// private handleSuccessInsert(): void {
	// 	this.dialogMessageContent = {
	// 		display: true,
	// 		title: 'Success',
	// 		content: 'Successfully inserted.',
	// 		hasBtnUrl: true
	// 	};
	// }

	// private handleSuccessUpdate(): void {
	// 	this.dialogMessageContent = {
	// 		display: true,
	// 		title: 'Success',
	// 		content: 'Successfully updated.',
	// 		hasBtnUrl: true
	// 	};
	// }

	// private handleSuccessDelete(): void {
	// 	this.dialogMessageContent = {
	// 		display: true,
	// 		title: 'Success',
	// 		content: 'Successfully deleted.',
	// 		hasBtnUrl: true
	// 	};
	// }

	// private userMessage(
	// 	severity: string,
	// 	summary: string,
	// 	detail: string
	// ): void {
	// 	this.message = {
	// 		severity,
	// 		summary,
	// 		detail
	// 	};
	// }
}
