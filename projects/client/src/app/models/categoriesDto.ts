import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class CategoriesDto implements MtBaseEntity {
  id?: string;
  CategoryID?: number;
  CategoryName?: null | string;
  Description?: null | string;
}
