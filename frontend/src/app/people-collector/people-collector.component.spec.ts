import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCollectorComponent } from './people-collector.component';

describe('PeopleCollectorComponent', () => {
  let component: PeopleCollectorComponent;
  let fixture: ComponentFixture<PeopleCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
