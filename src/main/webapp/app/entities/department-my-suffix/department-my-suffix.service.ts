import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { DepartmentMySuffix } from './department-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<DepartmentMySuffix>;

@Injectable()
export class DepartmentMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'api/departments';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/departments';

    constructor(private http: HttpClient) { }

    create(department: DepartmentMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(department);
        return this.http.post<DepartmentMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(department: DepartmentMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(department);
        return this.http.put<DepartmentMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<DepartmentMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<DepartmentMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<DepartmentMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<DepartmentMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<DepartmentMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<DepartmentMySuffix[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<DepartmentMySuffix[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: DepartmentMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<DepartmentMySuffix[]>): HttpResponse<DepartmentMySuffix[]> {
        const jsonResponse: DepartmentMySuffix[] = res.body;
        const body: DepartmentMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to DepartmentMySuffix.
     */
    private convertItemFromServer(department: DepartmentMySuffix): DepartmentMySuffix {
        const copy: DepartmentMySuffix = Object.assign({}, department);
        return copy;
    }

    /**
     * Convert a DepartmentMySuffix to a JSON which can be sent to the server.
     */
    private convert(department: DepartmentMySuffix): DepartmentMySuffix {
        const copy: DepartmentMySuffix = Object.assign({}, department);
        return copy;
    }
}
