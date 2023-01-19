import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import sectorsData from '../../utils/sectors.json';

@Component({
  selector: 'app-sector',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements OnInit {

  public sectors: any[] = [];
  constructor(private afs: AngularFirestore) { }

  async ngOnInit() {
    await this.getSectors();
  }

  async getSectors() {
    let res: any = await this.afs.collection('sectors').get().toPromise();
    this.sectors = [];
    for (let i in res.docs) {
      let data = res.docs[i].data();
      data.image = data.image && data.image.charAt(0) == '{' ? JSON.parse(data.image) : {};
      data.icon = data.icon && data.icon.charAt(0) == '{' ? JSON.parse(data.icon) : {};
      data.bannerImage = data.bannerImage && data.bannerImage.charAt(0) == '{' ? JSON.parse(data.bannerImage) : {};
      let id = res.docs[i].id;
      this.sectors.push({
        id,
        ...data
      });
    }
  }
}
