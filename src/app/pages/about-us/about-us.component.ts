import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public aboutUs: any = '';
  constructor(private afs: AngularFirestore) { }

  async ngOnInit() {
    await this.getAboutUs();
  }

  async getAboutUs() {
    let res = await this.afs.collection('aboutUs').get().toPromise();
    if (res) {
      let data: any = res.docs[0].data();
      this.aboutUs = data.data;
    }
  }

}
