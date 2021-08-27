import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FlavourPageComponent } from './flavour-page/flavour-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewsListPageComponent } from './news-list-page/news-list-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

const routes: Routes = [
  {
    path: 'brand',
    component: BrandPageComponent
  },
  {
    path: 'news/:id',
    component: NewsPageComponent
  },
  {
    path: 'news',
    component: NewsListPageComponent
  },
  {
    path: 'flavour/:flavour',
    component: FlavourPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: '**',
    component: NotfoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
