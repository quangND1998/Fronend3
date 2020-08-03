import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoquanthueComponent } from './coquanthue.component';

describe('CoquanthueComponent', () => {
  let component: CoquanthueComponent;
  let fixture: ComponentFixture<CoquanthueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoquanthueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoquanthueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
