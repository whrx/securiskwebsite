import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, Component, HostListener, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('cookiesTmpl', { static: false })
  cookiesTmpl!: TemplateRef<any>;
  title = 'securisk';

  constructor(private dialog: MatDialog) {
  }
  ngAfterViewInit(): void {
    this.showCookies();
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: any) {
    event.preventDefault();
  }

  showCookies() {
    this.dialog.open(this.cookiesTmpl, {
      disableClose: true,
      width: '400px',
      height: '200px',
      panelClass: 'custom-dialog-container'
    })
  }
}
