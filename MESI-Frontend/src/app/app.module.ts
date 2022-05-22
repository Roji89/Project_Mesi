import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './components/home/products/products.component';
import { ProductComponent } from './views/product/product.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { BoardAdminComponent } from './profiles/board-admin/board-admin.component';
import { BoardUserComponent } from './profiles/board-user/board-user.component';
import { NavBarComponent } from './components/commons/nav-bar/nav-bar.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CartComponent } from './views/cart/cart.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ButtonComponent } from './components/commons/button/button.component';
import { FormComponent } from './components/commons/form/form.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SearchComponent } from './views/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BoardAdminComponent,
    BoardUserComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    CarouselComponent,
    ButtonComponent,
    FormComponent,
    ProfileComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
