import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { UserResponse } from './models/users';

@Service()
export class UserClient {
        private http = inject(HttpClient);
        private baseUrl = `${environment.apiUrl}/user`;

        getUser(): Observable<UserResponse> {
                return this.http.get<UserResponse>(this.baseUrl);
        }
}
