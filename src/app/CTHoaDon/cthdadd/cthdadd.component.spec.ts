import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CthdaddComponent } from './cthdadd.component';

describe('CthdaddComponent', () => {
  let component: CthdaddComponent;
  let fixture: ComponentFixture<CthdaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CthdaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CthdaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
