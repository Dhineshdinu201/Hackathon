import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../http-api.service';

@Component({
  selector: 'app-recommendation-engine',
  templateUrl: './recommendation-engine.component.html',
  styleUrls: ['./recommendation-engine.component.css']
})
export class RecommendationEngineComponent implements OnInit {
  model: any = { "inputType": "", "gain": "" };
  constructor(private httpApiService: HttpApiService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    alert(await this.httpApiService.post("", this.model).toPromise());
  }
}
