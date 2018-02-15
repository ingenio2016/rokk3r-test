import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

const APP_ROUTES: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'news', component : NewsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
