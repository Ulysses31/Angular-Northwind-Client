import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImtApiService } from './../interfaces/mtApiService';

@Injectable()
export class MtApiService<TModel> implements ImtApiService<TModel> {
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

	getAll(): Observable<TModel[]> {
		return this.http.get<TModel[]>(
			this.apiServiceUrl
		);
	}

	getById(id: string): Observable<TModel> {
		return this.http.get<TModel>(
			`${this.apiServiceUrl}/${id}`,
			this.httpOptions
		);
	}

	insert(model: TModel): Observable<TModel> {
		return this.http.post<TModel>(
			this.apiServiceUrl,
			{ body: model },
			this.httpOptions
		);
	}

	update(id: string, model: TModel): Observable<TModel> {
		return this.http.put<TModel>(
			`${this.apiServiceUrl}/${id}`,
			{ body: model },
			this.httpOptions
		);
	}

	delete(id: string): Observable<void> {
		return this.http.delete<void>(
			`${this.apiServiceUrl}/${id}`,
			this.httpOptions
		);
	}
}
