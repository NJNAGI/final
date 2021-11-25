import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildemandedemandeurComponent } from './detaildemandedemandeur.component';

describe('DetaildemandedemandeurComponent', () => {
  let component: DetaildemandedemandeurComponent;
  let fixture: ComponentFixture<DetaildemandedemandeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildemandedemandeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildemandedemandeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
