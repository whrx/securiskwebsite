import { Component, OnInit } from '@angular/core';
import sectorsData from '../../utils/sectors.json';

@Component({
  selector: 'app-sector',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements OnInit {

  public sectors: any[] = sectorsData;
  constructor() { }

  ngOnInit(): void {
  }

}
