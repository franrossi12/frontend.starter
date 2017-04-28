import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatStartComponent } from './boat-start.component';

describe('BoatStartComponent', () => {
  let component: BoatStartComponent;
  let fixture: ComponentFixture<BoatStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
