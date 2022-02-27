import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { BoardUserComponent } from './profiles/board-user/board-user.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-board', canActivate: [AuthGuard], component: BoardUserComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
    ];
=======
import { ProductComponent } from './components/product/product.component';
import { BoardUserComponent } from './profiles/board-user/board-user.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'user-board', component: BoardUserComponent },
];
>>>>>>> add product without css

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
