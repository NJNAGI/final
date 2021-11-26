import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementH1Component } from './traitement-h1.component';

describe('TraitementH1Component', () => {
  let component: TraitementH1Component;
  let fixture: ComponentFixture<TraitementH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementH1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitementH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
