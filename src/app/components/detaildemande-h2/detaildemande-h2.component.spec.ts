import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildemandeH2Component } from './detaildemande-h2.component';

describe('DetaildemandeH2Component', () => {
  let component: DetaildemandeH2Component;
  let fixture: ComponentFixture<DetaildemandeH2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildemandeH2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildemandeH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
