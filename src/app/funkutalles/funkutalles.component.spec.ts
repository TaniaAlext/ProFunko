import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkutallesComponent } from './funkutalles.component';

describe('FunkutallesComponent', () => {
  let component: FunkutallesComponent;
  let fixture: ComponentFixture<FunkutallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkutallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunkutallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
