import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { CardContainerHomeComponent } from './card-container-home/card-container-home.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerHomeComponent,
    CardContainerHomeComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
