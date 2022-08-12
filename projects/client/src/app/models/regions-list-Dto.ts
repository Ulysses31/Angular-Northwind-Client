import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class RegionsListDto implements MtBaseEntity {
  id?: string;
  RegionID?: number;
  RegionDescription?: null | string;
  CreatedBy?: null | string;
	CreatedAt?: null | Date;
	UpdatedAt?: null | Date;
}
