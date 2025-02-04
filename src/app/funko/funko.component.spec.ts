import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoComponent } from './funko.component';

describe('FunkoComponent', () => {
  let component: FunkoComponent;
  let fixture: ComponentFixture<FunkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
