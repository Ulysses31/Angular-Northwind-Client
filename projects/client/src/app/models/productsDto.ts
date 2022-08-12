import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class ProductsDto implements MtBaseEntity {
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
}
