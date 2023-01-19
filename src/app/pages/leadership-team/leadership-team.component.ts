import { AngularFirestore } from '@angular/fire/firestore';
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
  constructor(private dialog: MatDialog, private afs: AngularFirestore) { }

  async ngOnInit() {
    await this.getLeadershipTeam();
  }

  async getLeadershipTeam() {
    let res: any = await this.afs.collection('leadershipTeam').get().toPromise();
    this.leadershipTeam = [];
    for (let i in res.docs) {
      let { name, designation, description, image, facebookLink, twitterLink, instagramLink, youtubeLink } = res.docs[i].data();
      image = (image && image.charAt(0) == '{') ? JSON.parse(image) : {};
      let id: any = res.docs[i].id;
      this.leadershipTeam.push({
        id,
        name,
        designation,
        description,
        image,
        profile_img: image.file,
        fb_link: facebookLink,
        insta_link: instagramLink,
        twitter_link: twitterLink,
        youtube_link: youtubeLink
      });
    }
    console.log(this.leadershipTeam);
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
