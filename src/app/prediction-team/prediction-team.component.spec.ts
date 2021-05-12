
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionTeamComponent } from './prediction-team.component';

describe('PredictionTeamComponent', () => {
  let component: PredictionTeamComponent;
  let fixture: ComponentFixture<PredictionTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

