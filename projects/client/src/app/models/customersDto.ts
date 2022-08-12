import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class CustomersDto implements MtBaseEntity {
  id?: string;
  CustomerID?: null | string;
  CompanyName?: null | string;
  ContactName?: null | string;
  ContactTitle?: null | string;
  Address?: null | string;
  City?: null | string;
  Region?: null | string;
  PostalCode?: null | string;
  Country?: null | string;
  Phone?: null | string;
  Fax?: null | string;
}
