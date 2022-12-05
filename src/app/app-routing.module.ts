import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationEngineComponent } from './recommendation-engine/recommendation-engine.component';
import { RecommendationEngine2Component } from './recommendation-engine2/recommendation-engine2.component';

const routes: Routes = [
  {
    path: "re2", component: RecommendationEngine2Component
  },
   {
    path: "re", component: RecommendationEngineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
