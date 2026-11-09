import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { serverErrorInterceptor } from './interceptors/server-error-interceptor';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';
import { Auth } from './auth';

export const appConfig: ApplicationConfig = {
        providers: [
                provideBrowserGlobalErrorListeners(),
                provideRouter(routes, withComponentInputBinding()),
                provideHttpClient(withInterceptors([serverErrorInterceptor, authTokenInterceptor])),
                provideAppInitializer(() => inject(Auth).autoLogin()),
        ]
};
