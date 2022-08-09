import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImtApiService } from './../interfaces/mtApiService';

@Injectable()
export class MtApiService<TModelList, TModel> implements ImtApiService<TModelList, TModel> {
	private apiServiceUrl: string = '';

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(public http: HttpClient) {}

	getApiServiceUrl(): string {
		return this.apiServiceUrl;
	}

	setApiServiceUrl(url: string): void {
		if (url) this.apiServiceUrl = url;
	}

	getAll(): Observable<TModelList[]> {
		return this.http.get<TModelList[]>(this.apiServiceUrl);
	}

	getById(id: string): Observable<TModelList> {
		return this.http.get<TModelList>(`${this.apiServiceUrl}/${id}`);
	}

	insert(model: TModel): Observable<TModel> {
		return this.http.post<TModel>(
			this.apiServiceUrl,
			model
		);
	}

	update(id: string, model: TModel): Observable<TModel> {
		return this.http.patch<TModel>(
			`${this.apiServiceUrl}/${id}`,
			model
		);
	}

	delete(id: string): Observable<void> {
		return this.http.delete<void>(
			`${this.apiServiceUrl}/${id}`
		);
	}
}
