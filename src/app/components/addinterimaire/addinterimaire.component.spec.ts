import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinterimaireComponent } from './addinterimaire.component';

describe('AddinterimaireComponent', () => {
  let component: AddinterimaireComponent;
  let fixture: ComponentFixture<AddinterimaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinterimaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinterimaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
