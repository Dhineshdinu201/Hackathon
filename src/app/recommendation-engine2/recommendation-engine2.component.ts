import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../http-api.service';

@Component({
  selector: 'app-recommendation-engine2',
  templateUrl: './recommendation-engine2.component.html',
  styleUrls: ['./recommendation-engine2.component.css']
})
export class RecommendationEngine2Component implements OnInit {
  products: any;
  model: any = { "inputType": "", "gain": "0", "userId": "1","HPF":"0" };
  result: any;
  constructor(private httpApiService: HttpApiService) { }

  async ngOnInit() {

    await this.getProducts();
    console.log(this.products);
  }
  async onSubmit() {
    this.result = await this.httpApiService.post("api/Hackathon/GainRecommend", this.model).toPromise();

  }
  async getProducts() {
    this.products = await this.httpApiService.getProductJson().toPromise();
  }
  async filter() {
    await this.getProducts();
    this.products=this.products.filter((product: any) => {
      return (product.type == this.model.inputType && (product.gain == +(this.model.gain) || product.gain == +(this.model.HPF)));
    });
  }
  async recommentHpf(gain: any) {
    this.model["HPF"] = "0";
    this.model["gain"] = gain;
    this.result = await this.httpApiService.post("api/Hackathon/HpfRecommend", this.model).toPromise();
  }

}
