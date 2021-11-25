import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbudgetComponent } from './listbudget.component';

describe('ListbudgetComponent', () => {
  let component: ListbudgetComponent;
  let fixture: ComponentFixture<ListbudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
