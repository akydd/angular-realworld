import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { loggedInGuard } from './guards/logged-in-guard';

export const routes: Routes = [
        { path: '', component: Home },
        { path: 'login', component: Login, canActivate: [loggedInGuard] },
        { path: 'register', component: Register, canActivate: [loggedInGuard] },
        { path: 'profile/:username', component: Profile }
];
