import { HttpInterceptorFn } from '@angular/common/http';
import { JWT_KEY } from '../auth';

// Put the JWT token in the request auth header, when it's available.
export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
        const token = localStorage.getItem(JWT_KEY);

        if (token) {
                const clonedReq = req.clone({
                        setHeaders: {
                                Authorization: `Token ${token}`
                        }
                });
                return next(clonedReq);
        }

        return next(req);
};
