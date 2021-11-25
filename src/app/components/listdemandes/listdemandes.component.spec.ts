import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdemandesComponent } from './listdemandes.component';

describe('ListdemandesComponent', () => {
  let component: ListdemandesComponent;
  let fixture: ComponentFixture<ListdemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
