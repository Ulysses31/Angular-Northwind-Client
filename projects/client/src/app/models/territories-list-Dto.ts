import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class TerritoriesListDto implements MtBaseEntity {
  id?: string;
  TerritoryID?: null | string;
  TerritoryDescription?: null | string;
  RegionID?: number;
  CreatedBy?: null | string;
	CreatedAt?: null | Date;
	UpdatedAt?: null | Date;
}
