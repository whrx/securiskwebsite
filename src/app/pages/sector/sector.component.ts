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

  public sectors: any[] = sectorData;
  public selectedSector: any;
  public showBanner: boolean  = true;
  constructor(private route: ActivatedRoute, private dialog: MatDialog) { 
    this.route.queryParams.subscribe(params => {
      this.showBanner = false;
      console.log(params['id']);
      this.selectedSector = this.sectors.filter(ele => ele.id == params['id'])[0];
      this.showBanner = true;
    });
  }

  ngOnInit(): void {
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
