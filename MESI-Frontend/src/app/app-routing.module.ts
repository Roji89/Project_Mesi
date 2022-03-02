import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { BoardUserComponent } from './profiles/board-user/board-user.component';

const routes: Routes = [
  { path: 'user-board', canActivate: [AuthGuard], component: BoardUserComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
