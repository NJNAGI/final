import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedemandeurComponent } from './listedemandeur.component';

describe('ListedemandeurComponent', () => {
  let component: ListedemandeurComponent;
  let fixture: ComponentFixture<ListedemandeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedemandeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedemandeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
