import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class TerritoriesDto implements MtBaseEntity {
  id?: string;
  TerritoryID?: null | string;
  TerritoryDescription?: null | string;
  RegionID?: number;
}
