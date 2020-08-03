import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptaddComponent } from './reciptadd.component';

describe('ReciptaddComponent', () => {
  let component: ReciptaddComponent;
  let fixture: ComponentFixture<ReciptaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
