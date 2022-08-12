import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class ShippersListDto implements MtBaseEntity {
  id?: string;
  ShipperID?: number;
  CompanyName?: null | string;
  Phone?: null | string;
  CreatedBy?: null | string;
	CreatedAt?: null | Date;
	UpdatedAt?: null | Date;
}
