import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class CategoriesDto {
	id?: string = this.CategoryID?.toString();
  CategoryID?: number;
  CategoryName?: null | string;
  Description?: null | string;
  CreatedBy?: null | string;
	CreatedAt?: Date;
	UpdatedAt?: Date;
}
