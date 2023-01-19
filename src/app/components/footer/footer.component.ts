import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footerData: any = {};
  public addresses: any[] = [];
  constructor(private afs: AngularFirestore) { }

  async ngOnInit() {
    await this.getFooter();
    await this.getAddress();
  }

  async getFooter() {
    let res: any = await this.afs.collection('footer').get().toPromise();
    let data: any = res.docs[0].data();
    this.footerData = data;
    console.log(this.footerData)
  }

  async getAddress() {
    const res = await this.afs.collection('Address').get().toPromise();
    console.log(res.docs[0].data());
    let addresses: any[] = [];
    for (let i in res.docs) {
      let data: any = res.docs[i].data();
      let id: any = res.docs[i].id;
      addresses.push({
        id,
        branch_name: data['location'],
        address: data['address'],
        address_type: data['addressType'],
        email: data['email'],
        mobile: data['mobile'],
        whatsappNumber: data['whatsappNumber'],
        maps_link: data['mapsLink']
      })
    }
    this.addresses = addresses.sort((a, b) => {
      let x = a.address_type.toLowerCase();
      let y = b.address_type.toLowerCase();
      if (x < y) {return 1;}
      if (x > y) {return -1;}
      return 0;
    });
    console.log(this.addresses);
  }

}
