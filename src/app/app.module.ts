import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { APP_ROUTING } from './app.routes';

// Providers
import { ChartService } from './providers/chart.service';

// HighCharts Module
import { ChartModule } from 'angular-highcharts';

// in-Memory Modules
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryHighChartDataService } from './providers/in.memory.charts-data.service';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ChartModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryHighChartDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
