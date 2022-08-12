import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class EmployeesListDto implements MtBaseEntity {
  id?: string;
  EmployeeID?: number;
  LastName?: null | string;
  FirstName?: null | string;
  Title?: null | string;
  TitleOfCourtesy?: null | string;
  BirthDate?: Date;
  HireDate?: Date;
  Address?: null | string;
  City?: null | string;
  Region?: null | string;
  PostalCode?: null | string;
  Country?: null | string;
  HomePhone?: null | string;
  Extension?: null | string;
  Notes?: null | string;
  ReportsTo?: number;
  PhotoPath?: null | string;
  CreatedBy?: null | string;
	CreatedAt?: null | Date;
	UpdatedAt?: null | Date;
}
