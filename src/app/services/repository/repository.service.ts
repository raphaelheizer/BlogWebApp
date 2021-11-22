import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RepositoryService<T> {

    // Our service must be run within the bounds of localhost
    private endpoint = '/api';

    constructor(protected httpClient: HttpClient) {
    }

    protected get(parameters: string): Observable<T> {
        return this.httpClient.get<T>(this.endpoint + parameters);
    }

    protected getAll(parameters: string): Observable<T[]> {
        return this.httpClient.get<T[]>(this.endpoint + parameters);
    }
}
