import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../http-api.service';

@Component({
  selector: 'app-recommendation-engine',
  templateUrl: './recommendation-engine.component.html',
  styleUrls: ['./recommendation-engine.component.css']
})
export class RecommendationEngineComponent implements OnInit {
  model: any = { "inputType": "", "gain": 0, "userId": "1" };
  result: any;
  constructor(private httpApiService: HttpApiService) { }
  ngOnInit(): void {
  }

  async onSubmit() {
    this.result = await this.httpApiService.post("api/Hackathon", this.model).toPromise()

  }
}
