import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class EmployeeTerritoriesDto implements MtBaseEntity {
  id?: string;
  EmployeeID?: number;
  TerritoryID?: null | string;
}
