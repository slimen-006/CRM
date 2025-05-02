import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratTermineCommercialComponent } from './contrat-termine-commercial.component';

describe('ContratTermineCommercialComponent', () => {
  let component: ContratTermineCommercialComponent;
  let fixture: ComponentFixture<ContratTermineCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratTermineCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratTermineCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
