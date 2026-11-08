import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { RegisterUserRequest, UserResponse } from './models/users';

@Service()
export class UsersClient {
        private http = inject(HttpClient);
        private baseUrl = `${environment.apiUrl}/users`;

        registerUser(data: RegisterUserRequest): Observable<UserResponse> {
                return this.http.post<UserResponse>(this.baseUrl, data);
        }

}
