import { Service, Signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Author } from './models/articles';

export interface ProfileResponse {
        profile: Author
}

@Service()
export class Profile {
        private readonly baseUrl = `${environment.apiUrl}/profiles`;

        getByUsername(username: Signal<string | undefined>) {
                return httpResource<ProfileResponse>(() => username() ? `${this.baseUrl}/${username()}` : undefined);
        }
}
