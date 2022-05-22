import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { CartComponent } from './views/cart/cart.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SearchComponent } from './views/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent},
  { path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
