import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprestataireComponent } from './addprestataire.component';

describe('AddprestataireComponent', () => {
  let component: AddprestataireComponent;
  let fixture: ComponentFixture<AddprestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprestataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
