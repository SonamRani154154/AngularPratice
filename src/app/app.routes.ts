import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { User } from './user/user';

export const routes: Routes = [

    {path:'login',component:Login},
    {path:'home',component:Home},
    {path:'about',component:About},
    {path:'user/:id/:name',component:User},
    {path:'profile',component:Profile, data:{name:'Sonam'}},
    {path:'',component:Home},

    {path:'**',component:PageNotFound}
];
