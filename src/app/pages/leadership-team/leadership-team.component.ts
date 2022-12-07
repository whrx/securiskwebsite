import { LeadershipTeamProfileComponent } from './../../components/leadership-team-profile/leadership-team-profile.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leadership-team',
  templateUrl: './leadership-team.component.html',
  styleUrls: ['./leadership-team.component.scss']
})
export class LeadershipTeamComponent implements OnInit {

  leadershipTeam: any[] = [
    {
      name: 'Edward Gilmore',
      designation: 'Founder and CEO',
      image: 'https://res2.weblium.site/res/5d8a4cab41a27e002608256a/5d8cbe3c92ab87002626d409_optimized.webp'
    },
    {
      name: 'Lucy Kims',
      designation: 'Member Experience Manager',
      image: 'https://res2.weblium.site/res/5d8a4cab41a27e002608256a/5d8cbe36122259002633ffed_optimized.webp'
    },
    {
      name: 'Dan Wilson',
      designation: 'Senior Community Manager',
      image: 'https://res2.weblium.site/res/5d8a4cab41a27e002608256a/5d8cbe3a337247002601d4b4_optimized.webp'
    },
    {
      name: 'Jack Finnert',
      designation: 'Chief Administrator',
      image: 'https://res2.weblium.site/res/5d8a4cab41a27e002608256a/5d8cbe95dff27b00280a6dde_optimized.webp'
    },
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showMemberDetails(item: any) {
    console.log(item);
    const dialogRef = this.dialog.open(LeadershipTeamProfileComponent, {
      width: '60%',
      height: '80%',
      disableClose: true,
      data: item,
      panelClass: 'custom-dialog-container'
    })
  }
}
