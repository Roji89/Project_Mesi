import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './commun/footer/footer.component';
import { BoardAdminComponent } from './profiles/board-admin/board-admin.component';
import { BoardUserComponent } from './profiles/board-user/board-user.component';
import { NavBarComponent } from './commun/nav-bar/nav-bar.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BoardAdminComponent,
    BoardUserComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    AppComponent,
    HomeComponent,
    ProductsComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
