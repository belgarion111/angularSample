import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SocialIconComponent } from './header/social-icon/social-icon.component';
import { YoutubeIconComponent } from './header/youtube-icon/youtube-icon.component';
import { LoginComponent } from './form/login/login.component';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import { StoreModule } from '@ngrx/store'
import {authReducer} from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    SocialIconComponent,
    YoutubeIconComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forRoot({ auth : authReducer }, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
