import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import sectorData from '../../utils/sectors.json';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public slides = [
    // {img: "https://firebasestorage.googleapis.com/v0/b/juteproducts.appspot.com/o/securisk%2Fcarousel%2Flanding_carousel_1.jpeg?alt=media&token=091460ba-5204-4a18-93bd-8c33975b00e4"},
    // {img: "https://firebasestorage.googleapis.com/v0/b/juteproducts.appspot.com/o/securisk%2Fcarousel%2Flanding_carousel_2.jpeg?alt=media&token=091460ba-5204-4a18-93bd-8c33975b00e4"},
    // {img: "https://firebasestorage.googleapis.com/v0/b/juteproducts.appspot.com/o/securisk%2Fcarousel%2Flanding_carousel_3.jpeg?alt=media&token=091460ba-5204-4a18-93bd-8c33975b00e4"},
    // {img: "https://firebasestorage.googleapis.com/v0/b/juteproducts.appspot.com/o/securisk%2Fcarousel%2Flanding_carousel_4.jpeg?alt=media&token=091460ba-5204-4a18-93bd-8c33975b00e4"},
    // {img: "https://firebasestorage.googleapis.com/v0/b/juteproducts.appspot.com/o/securisk%2Fcarousel%2Flanding_carousel_5.jpeg?alt=media&token=091460ba-5204-4a18-93bd-8c33975b00e4"},
    // {img: "https://firebasestorage.googleapis.com/v0/b/juteproducts.appspot.com/o/securisk%2Fcarousel%2Flanding_carousel_6.jpeg?alt=media&token=091460ba-5204-4a18-93bd-8c33975b00e4"},
    // {img: "https://firebasestorage.googleapis.com/v0/b/juteproducts.appspot.com/o/securisk%2Fcarousel%2Flanding_carousel_7.jpeg?alt=media&token=091460ba-5204-4a18-93bd-8c33975b00e4"},
    {img: "https://firebasestorage.googleapis.com/v0/b/juteproducts.appspot.com/o/securisk%2Fcarousel%2Flanding_carousel_8.jpg?alt=media&token=091460ba-5204-4a18-93bd-8c33975b00e4"},
    // {img: "https://firebasestorage.googleapis.com/v0/b/juteproducts.appspot.com/o/securisk%2Fcarousel%2Flanding_carousel_9.jpeg?alt=media&token=091460ba-5204-4a18-93bd-8c33975b00e4"},
    {img: "https://firebasestorage.googleapis.com/v0/b/juteproducts.appspot.com/o/securisk%2Fcarousel%2Flanding_carousel_10.jpg?alt=media&token=091460ba-5204-4a18-93bd-8c33975b00e4"},
  ];
  public slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "infinite": true, autoplay: true};
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
      let id = res.docs[i].id;
      data.icon = data.icon && data.icon.charAt(0) == '{' ? JSON.parse(data.icon) : {};
      this.sectors.push({
        id,
        name: data.name,
        icon: data.icon
      });
    }
  }

}
