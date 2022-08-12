import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class ShippersDto implements MtBaseEntity {
  id?: string;
  ShipperID?: number;
  CompanyName?: null | string;
  Phone?: null | string;
}
