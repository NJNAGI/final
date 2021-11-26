import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeprestataireComponent } from './listeprestataire.component';

describe('ListeprestataireComponent', () => {
  let component: ListeprestataireComponent;
  let fixture: ComponentFixture<ListeprestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeprestataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeprestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
