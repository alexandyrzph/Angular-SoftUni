import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from './interfaces';

const apiUrl = environment.apiUrl;

@Injectable()
export class PostService {

    constructor(private http: HttpClient) { }

    loadPostList(limit?: number): Observable<IPost[]> {
        return this.http.get<IPost[]>(`${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`);
    }
}
