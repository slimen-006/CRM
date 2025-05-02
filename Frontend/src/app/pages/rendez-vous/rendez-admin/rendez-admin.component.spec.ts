import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezAdminComponent } from './rendez-admin.component';

describe('RendezAdminComponent', () => {
  let component: RendezAdminComponent;
  let fixture: ComponentFixture<RendezAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
