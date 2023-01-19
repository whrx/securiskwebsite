import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import sectorData from '../../utils/sectors.json';
import { ProductComponent } from 'src/app/components/product/product.component';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {

  public sectors: any[] = [];
  public products: any[] = [];
  public selectedSector: any;
  public showBanner: boolean  = true;
  public sectorId: any = '';
  public selectedProduct: any = {};

  constructor(private route: ActivatedRoute, private dialog: MatDialog,private afs: AngularFirestore) { 
    this.route.queryParams.subscribe(params => {
      this.showBanner = false;
      console.log(params['id']);
      this.sectorId = params['id'];
      this.getSector();
    });
  }

  async ngOnInit() {
    await this.getSectors();
    await this.getProducts();
  }

  async getSector() {
    let res = await this.afs.collection('sectors').doc(this.sectorId).get().toPromise();
    if (res) {
      let dataa: any = res.data();
      dataa.image = dataa.image && dataa.image.charAt(0) == '{' ? JSON.parse(dataa.image) : {};
      dataa.icon = dataa.icon && dataa.icon.charAt(0) == '{' ? JSON.parse(dataa.icon) : {};
      dataa.bannerImage = dataa.bannerImage && dataa.bannerImage.charAt(0) == '{' ? JSON.parse(dataa.bannerImage) : {};
      this.selectedSector = {...dataa, id: res.id};
      console.log(this.selectedSector);
      this.showBanner = true;
    }
  }

  async getSectors() {
    let res: any = await this.afs.collection('sectors').get().toPromise();
    this.sectors = [];
    for (let i in res.docs) {
      let data = res.docs[i].data();
      let id = res.docs[i].id;
      this.sectors.push({
        id,
        name: data.name
      });
    }
  }

  async getProducts() {
    let res = await this.afs.collection('products').get().toPromise();
    this.products = [];
    for (let i in res.docs) {
      let data: any = res.docs[i].data();
      if (data.sectorId == this.sectorId) {
        data.icon = data.icon && data.icon.charAt(0) == '{' ? JSON.parse(data.icon) : {};
        let sectorData = await this.afs.doc(data.sector).get().toPromise();
        let sector: any = sectorData.data();
        let sectorId: any = sectorData.id;
        console.log(sector.name);
        let id = res.docs[i].id;
        this.products.push({
          id,
          ...data,
          sector: sector.name,
          sector_id: sectorId
        });
      } 
    }
  }

  showProduct() {
    const dialogRef = this.dialog.open(ProductComponent, {
      width: "65%",
      height: "90%",
      disableClose: true,
      panelClass: "custom-dialog-container"
    })
  }
}
