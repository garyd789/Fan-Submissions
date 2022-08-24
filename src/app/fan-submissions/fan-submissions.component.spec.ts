import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanSubmissionsComponent } from './fan-submissions.component';

describe('FanSubmissionsComponent', () => {
  let component: FanSubmissionsComponent;
  let fixture: ComponentFixture<FanSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanSubmissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
