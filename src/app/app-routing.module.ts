import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './view/not-found/not-found.component';
import {LoginComponent} from './view/authentication/login.component';
import {RegisterComponent} from './view/register/register.component';
import {BlogComponent} from './view/blog/blog.component';
import {PasswordRecoverComponent} from './view/password-recover/password-recover.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', component: BlogComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'password-recover', component: PasswordRecoverComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
