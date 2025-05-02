import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezCommercialComponent } from './rendez-commercial.component';

describe('RendezCommercialComponent', () => {
  let component: RendezCommercialComponent;
  let fixture: ComponentFixture<RendezCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
