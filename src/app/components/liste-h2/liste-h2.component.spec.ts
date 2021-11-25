import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeH2Component } from './liste-h2.component';

describe('ListeH2Component', () => {
  let component: ListeH2Component;
  let fixture: ComponentFixture<ListeH2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeH2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
