import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITheme } from './interfaces';

const apiUrl = environment.apiUrl;

@Injectable()
export class ThemeService {

    constructor(private http: HttpClient) { }

    loadThemeList(): Observable<ITheme[]> {
        return this.http.get<ITheme[]>(`${apiUrl}/themes`);
    }

    loadThemeById(id): Observable<ITheme> {
        return this.http.get<ITheme>(`${apiUrl}/themes/${id}`);
    }
}
