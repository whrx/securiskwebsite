import { Component, OnInit } from '@angular/core';
import sectorData from '../../utils/sectors.json';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public sectors: any[] = sectorData;
  constructor() { }

  ngOnInit(): void {
  }

}
