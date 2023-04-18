import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserComponent } from './obser.component';

describe('ObserComponent', () => {
  let component: ObserComponent;
  let fixture: ComponentFixture<ObserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
