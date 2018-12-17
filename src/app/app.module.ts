import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule,
    MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      MatButtonModule,
      MatMenuModule,
      MatCardModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
