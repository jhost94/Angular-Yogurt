import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CardDeckComponent } from './components/card-deck/card-deck.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsListPageComponent } from './news-list-page/news-list-page.component';
import { FlavourPageComponent } from './flavour-page/flavour-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/status/loading/loading.component';
import { ErrorComponent } from './components/status/error/error.component';
import { SuccessComponent } from './components/status/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CarouselComponent,
    CardDeckComponent,
    NavbarComponent,
    NotfoundPageComponent,
    BrandPageComponent,
    NewsPageComponent,
    NewsListPageComponent,
    FlavourPageComponent,
    ContactPageComponent,
    HeaderComponent,
    LoadingComponent,
    ErrorComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
