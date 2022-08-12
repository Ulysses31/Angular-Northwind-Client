import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class RegionsDto implements MtBaseEntity {
  id?: string;
  RegionID?: number;
  RegionDescription?: null | string;
}
