import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class EmployeeTerritoriesListDto implements MtBaseEntity {
  id?: string;
  EmployeeID?: number;
  TerritoryID?: null | string;
  CreatedBy?: null | string;
	CreatedAt?: null | Date;
	UpdatedAt?: null | Date;
}
