import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementGRHComponent } from './traitement-grh.component';

describe('TraitementGRHComponent', () => {
  let component: TraitementGRHComponent;
  let fixture: ComponentFixture<TraitementGRHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementGRHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitementGRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
