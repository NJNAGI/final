import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildemandeH1Component } from './detaildemande-h1.component';

describe('DetaildemandeH1Component', () => {
  let component: DetaildemandeH1Component;
  let fixture: ComponentFixture<DetaildemandeH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildemandeH1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildemandeH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
