import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeinterimaireComponent } from './listeinterimaire.component';

describe('ListeinterimaireComponent', () => {
  let component: ListeinterimaireComponent;
  let fixture: ComponentFixture<ListeinterimaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeinterimaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeinterimaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
