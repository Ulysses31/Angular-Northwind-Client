import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class OrdersListDto implements MtBaseEntity {
  id?: string;
  OrderID?: number;
	CustomerID?: null | string;
	EmployeeID?: number;
	OrderDate?: Date;
	RequiredDate?: Date;
	ShippedDate?: Date;
	ShipVia?: number;
	Freight?: number;
	ShipName?: null | string;
	ShipAddress?: null | string;
	ShipCity?: null | string;
	ShipRegion?: null | string;
	ShipPostalCode?: null | string;
	ShipCountry?: null | string;
}
