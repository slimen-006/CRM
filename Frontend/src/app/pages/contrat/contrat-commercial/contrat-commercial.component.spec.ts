import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratCommercialComponent } from './contrat-commercial.component';

describe('ContratCommercialComponent', () => {
  let component: ContratCommercialComponent;
  let fixture: ComponentFixture<ContratCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
