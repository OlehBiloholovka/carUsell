import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { CarComponent } from './components/cars/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { HeaderComponent } from './components/header/header.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import {AuthService} from './core/auth.service';

const appRoutes: Routes = [
  {path: 'old', component: CarsComponent},
  {path: 'cars', component: CarListComponent},
  {path: 'car', component: CarComponent},
  {path: 'login', component: UserLoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    CarListComponent,
    HeaderComponent,
    UserLoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
