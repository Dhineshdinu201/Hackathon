import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationEngine2Component } from './recommendation-engine2.component';

describe('RecommendationEngine2Component', () => {
  let component: RecommendationEngine2Component;
  let fixture: ComponentFixture<RecommendationEngine2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationEngine2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationEngine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
