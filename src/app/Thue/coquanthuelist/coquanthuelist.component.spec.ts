import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoquanthuelistComponent } from './coquanthuelist.component';

describe('CoquanthuelistComponent', () => {
  let component: CoquanthuelistComponent;
  let fixture: ComponentFixture<CoquanthuelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoquanthuelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoquanthuelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
