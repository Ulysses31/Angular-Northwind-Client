import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class ProductsListDto implements MtBaseEntity {
  id?: string;
  ProductID?: number;
  ProductName?: null | string;
  SupplierID?: number;
  CategoryID?: number;
  QuantityPerUnit?: null | string;
  UnitPrice?: number;
  UnitsInStock?: number;
  UnitsOnOrder?: number;
  ReorderLevel?: number;
  Discontinued?: boolean;
  CreatedBy?: null | string;
	CreatedAt?: null | Date;
	UpdatedAt?: null | Date;
}
