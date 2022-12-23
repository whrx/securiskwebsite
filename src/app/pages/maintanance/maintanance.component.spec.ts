import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintananceComponent } from './maintanance.component';

describe('MaintananceComponent', () => {
  let component: MaintananceComponent;
  let fixture: ComponentFixture<MaintananceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintananceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintananceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
