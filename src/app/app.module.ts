import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecommendationEngineComponent } from './recommendation-engine/recommendation-engine.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecommendationEngine2Component } from './recommendation-engine2/recommendation-engine2.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendationEngineComponent,
    RecommendationEngine2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
