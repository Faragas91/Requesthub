import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RequestCreateModel } from "../interface/requestcreate.model";
import { RequestGetModel } from '../interface/requestget.model';
import { Observable, BehaviorSubject, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RequestService {
    private baseUrl = 'http://localhost:5164/api/requests';

    requests: RequestGetModel[] = [];

    private requestSubject = new BehaviorSubject<RequestGetModel[]>([]);
    requests$ = this.requestSubject.asObservable();

    constructor(private http: HttpClient) { }

    loadRequests() {
        this.http.get<RequestGetModel[]>(`${this.baseUrl}`)
        .subscribe(
            t => this.requestSubject.next(t)
        );
    }

    // Create a new ticket with post request
    createRequest(request: RequestCreateModel) {
        return this.http.post(`${this.baseUrl}`, request).pipe(
            tap(() => this.loadRequests())
        );
    }
}