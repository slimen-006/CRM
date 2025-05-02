import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCommercialComponent } from './profil-commercial.component';

describe('ProfilCommercialComponent', () => {
  let component: ProfilCommercialComponent;
  let fixture: ComponentFixture<ProfilCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
