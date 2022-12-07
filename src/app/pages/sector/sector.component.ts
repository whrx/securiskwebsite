import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import sectorData from '../../utils/sectors.json';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {

  public sectors: any[] = sectorData;
  public selectedSector: any;
  public showBanner: boolean  = true;
  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.showBanner = false;
      console.log(params['id']);
      this.selectedSector = this.sectors.filter(ele => ele.id == params['id'])[0];
      this.showBanner = true;
    });
  }

  ngOnInit(): void {
  }

}
