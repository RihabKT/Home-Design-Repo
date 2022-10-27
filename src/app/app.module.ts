import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { FooterComponent } from './footer/footer.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { SvgComponent } from './svg/svg.component';
import { WhoAreWeFirstComponent } from './who-are-we-first/who-are-we-first.component';
import { WhoAreWeSecondComponent } from './who-are-we-second/who-are-we-second.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    FooterComponent,
    Section4Component,
    Section5Component,
    SvgComponent,
    WhoAreWeFirstComponent,
    WhoAreWeSecondComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
