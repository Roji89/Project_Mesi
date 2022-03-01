import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardUserComponent } from './profiles/board-user/board-user.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [{ path: '', component: HomeComponent },{ path: 'user-board', component: BoardUserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
