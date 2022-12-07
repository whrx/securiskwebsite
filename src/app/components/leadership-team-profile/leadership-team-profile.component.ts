import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-leadership-team-profile',
  templateUrl: './leadership-team-profile.component.html',
  styleUrls: ['./leadership-team-profile.component.scss']
})
export class LeadershipTeamProfileComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
