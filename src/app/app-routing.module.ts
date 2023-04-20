import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {RoomsComponent} from "./components/rooms/rooms.component";
import {LoginComponent} from "./components/login/login.component";
import {RequestsComponent} from "./components/requests/requests.component";
import {CreateRequestComponent} from "./components/create-request/create-request.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'request', component: RequestsComponent},
  {path: 'request/create', component: CreateRequestComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
