import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services: any = '';
  constructor(private afs: AngularFirestore) { }

  async ngOnInit() {
    await this.getServices();
  }

  async getServices() {
    let res = await this.afs.collection('services').get().toPromise();
    if (res) {
      let data: any = res.docs[0].data();
      this.services = data.data;
    }
  }

}
