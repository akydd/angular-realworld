import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorResponse } from '../models/error';

export const serverErrorInterceptor: HttpInterceptorFn = (req, next) => {
        return next(req).pipe(
                catchError((err: unknown) => {
                        if (err instanceof HttpErrorResponse) {
                                if (isRealApiError(err)) {
                                        return throwError(() => err.error as ErrorResponse);

                                }
                                return throwError(() => { errors: { server: [err.message] } });
                        }

                        return throwError(() => { errors: { unknown: [err] } });
                })
        );
}

function isRealApiError(err: HttpErrorResponse): boolean {
        const e = err.error;
        return e !== null && 'errors' in e && isStringArrayDict(e.errors);
}

type StringArrayDict = Record<string, string[]>;

function isStringArrayDict(value: unknown): value is StringArrayDict {
        if (typeof value !== 'object' || value === null || Array.isArray(value)) {
                return false;
        }

        return Object.values(value).every(
                (val) => Array.isArray(val) && val.every((item) => typeof item === 'string')
        );
}
