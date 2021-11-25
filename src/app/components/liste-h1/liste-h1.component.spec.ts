import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeH1Component } from './liste-h1.component';

describe('ListeH1Component', () => {
  let component: ListeH1Component;
  let fixture: ComponentFixture<ListeH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeH1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
