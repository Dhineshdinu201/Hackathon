import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation-engine',
  templateUrl: './recommendation-engine.component.html',
  styleUrls: ['./recommendation-engine.component.css']
})
export class RecommendationEngineComponent implements OnInit {
  model: any = {"inputType":"","gain":""};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
