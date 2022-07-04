import { AddProductComponent } from './views/add-product/add-product.component';
import { User } from 'src/app/models/user.model';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { CartComponent } from './views/cart/cart.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AdminComponent } from './views/admin/admin.component';
import { EditProductComponent } from './views/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
    data: { role: ['user'] }
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'product/add',
    component: AddProductComponent,
  },
  { path: 'product/:id', component: EditProductComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { role: ['superadmin'] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
