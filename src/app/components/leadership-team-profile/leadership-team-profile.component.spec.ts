import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipTeamProfileComponent } from './leadership-team-profile.component';

describe('LeadershipTeamProfileComponent', () => {
  let component: LeadershipTeamProfileComponent;
  let fixture: ComponentFixture<LeadershipTeamProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipTeamProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipTeamProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
