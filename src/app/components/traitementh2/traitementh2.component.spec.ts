import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Traitementh2Component } from './traitementh2.component';

describe('Traitementh2Component', () => {
  let component: Traitementh2Component;
  let fixture: ComponentFixture<Traitementh2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Traitementh2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Traitementh2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
