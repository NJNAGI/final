import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementpointageComponent } from './traitementpointage.component';

describe('TraitementpointageComponent', () => {
  let component: TraitementpointageComponent;
  let fixture: ComponentFixture<TraitementpointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementpointageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitementpointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
