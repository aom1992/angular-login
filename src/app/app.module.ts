import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DefaultModule } from './layouts/default/default.module';
import { LoginService } from './services/login.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    ReactiveFormsModule 

  ],
  providers: [
    LoginService,
    {
      useClass: HashLocationStrategy, provide: LocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
