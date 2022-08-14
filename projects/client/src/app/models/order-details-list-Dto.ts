import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class OrderDetailsListDto implements MtBaseEntity {
  id?: string;
  OrderID?: number;
  ProductID?: number;
  UnitPrice?: number;
  Quantity?: number;
  Discount?: number;
  CreatedBy?: null | string;
	CreatedAt?: null | Date;
	UpdatedAt?: null | Date;
}
