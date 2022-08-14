import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class OrderDetailsDto implements MtBaseEntity {
  id?: string;
  OrderID?: number;
  ProductID?: number;
  UnitPrice?: number;
  Quantity?: number;
  Discount?: number;
}
