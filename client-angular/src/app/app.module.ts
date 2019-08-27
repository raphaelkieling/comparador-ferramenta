import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './screens/admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './screens/login/login.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Interceptor } from './shared/interceptor/interceptor.module';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Interceptor,
    BrowserAnimationsModule,
    AdminModule,
    LoginModule,
    HttpClientModule,
    FlexLayoutModule,
    KeyboardShortcutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
