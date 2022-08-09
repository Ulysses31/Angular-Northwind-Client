import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class CategoriesListDto implements MtBaseEntity {
  id?: string;
  CategoryID?: number;
  CategoryName?: null | string;
  Description?: null | string;
  CreatedBy?: null | string;
	CreatedAt?: null | Date;
	UpdatedAt?: null | Date;
}
