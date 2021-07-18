import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    UserlistComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // exports:[
  //   HomeComponent,
  //   NavbarComponent,
  //   FooterComponent
  // ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
