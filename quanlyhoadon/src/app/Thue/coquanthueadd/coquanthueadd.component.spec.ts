import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoquanthueaddComponent } from './coquanthueadd.component';

describe('CoquanthueaddComponent', () => {
  let component: CoquanthueaddComponent;
  let fixture: ComponentFixture<CoquanthueaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoquanthueaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoquanthueaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
