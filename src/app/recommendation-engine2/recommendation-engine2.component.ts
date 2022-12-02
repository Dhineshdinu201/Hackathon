import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../http-api.service';

@Component({
  selector: 'app-recommendation-engine2',
  templateUrl: './recommendation-engine2.component.html',
  styleUrls: ['./recommendation-engine2.component.css']
})
export class RecommendationEngine2Component implements OnInit {
  products: any;
  model: any = { "inputType": "", "gain": "0", "userId": "1" };
  result: any;
  constructor(private httpApiService: HttpApiService) { }

  async ngOnInit() {
    this.products = await this.httpApiService.getProductJson().toPromise();
    console.log(this.products);
  }
  async onSubmit() {
    this.result = await this.httpApiService.post("api/Hackathon/GainRecommend", this.model).toPromise();

  }
  async recommentHpf(gain: any) {
    this.model["HPF"] = "0";
    this.model["gain"] = gain;
    this.result = await this.httpApiService.post("api/Hackathon/HpfRecommend", this.model).toPromise();
  }

}
