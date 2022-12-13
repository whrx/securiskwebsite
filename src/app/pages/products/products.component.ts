import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ProductComponent } from 'src/app/components/product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = [
    'Hull & Machinery Insurance',
    'Business Interruption',
    'Third Party Liability',
    'Management & Professional Liability',
    'Workers’ Compensation',
    // 'Yield Losses Due To Non-Preventable Risks, Such As Natural Fire And Lightning, Storm, Hailstorm, Cyclone, Typhoon, Tempest, Hurricane, Tornado.',
    'Supply Chain Interruption',
    // 'Risks Due To Flood, Inundation And Landslide, Drought, Dry Spells, Pests/Diseases.',
    'High Production Costs',
    'Material Damage',
    'Business Interruption',
    'Commercial General Liability',
    'Product Recall',
    'Marine Cargo/Sales Turnover Policy',
    'Professional Indemnity Cover',
    "Employer's Liability Cover",
    'Property Damage',
    'Business Interruption',
    'Machinery Breakdown',
    'Marine Cargo/ Stock Through Insurance',
    // 'Third Party Liabilities Including Commercial General Liability, D&O Insurance, Product Recall',
    'Sabotage And Terrorism/Political Risks',
    'Construction All Risk',
    'Erection All Risk',
    'Advanced Loss Of Profit',
    'Contractors Plant & Machinery Insurance',
    'Tailor Made Contingency Covers',
    'Directors’ And Officer’s Insurance',
    'Crime Insurance',
    'Computer & Cyber Fraud',
    'Professional Indemnity Insurance',
    'Errors & Omission',
    'Package Insurance',
    'Title Insurance',
    'Cyber Extortion',
    'Crime And Data Breach',
    'Errors And Omissions',
    'General Liability',
    'Employers Liability',
    'Trade Credit Risk',
    'Fine Art Insurance',
    'Diamond And Jewellery Insurance',
    'Specie Insurance',
    'Terrorism Insurance',
    'Professional Indemnity',
    'Public Liability',
    'Directors & Officers Liability',
    'Political & Credit Risk',
    'Environmental Impairment Liability',
    'Contractors Plant & Machinery',
    'Liability Insurance',
    'Offshore / Onshore Constructions',
    'Physical And Material Damage',
    'Seepage And Pollution',
    'Control Of Well / Operators Extra Expenses',
    'Environmental Damage Insurance',
    'General Third-Party Liability',
    'Public Liability Act Insurance',
    'Directors And Officers Insurance',
    'Clinical Trial',
    'Employer’s Liability Cover',
    'Standalone Third-Party Liability',
    'Removal Of Wreck And Pollution',
    'Stand Alone Terrorism',
    'Motor Insurance',
    'Mediclaim & Critical Insurance',
    'Term Life Insurance',
    'Householder’s Insurance',
    'Shopkeeper’s Insurance',
    'Protection & Indemnity Insurance',
    'War Risk Cover',
    'Equipment Breakdown',
    'Builders All Risk',
    'Cancellation Of An Event',
    'Third Party Bodily Injury And Property Damage',
    'Property Insurance',
    'Freight Forwarders Liability'
  ]
  constructor(private dialog: MatDialog) { }

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
