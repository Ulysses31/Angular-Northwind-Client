import { MtBaseEntity } from 'projects/corelib/src/public-api';

export class ApiResponse {
	status?: string;
	data?: null | [];
	executionTime?: null | string;
}
