import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  logoUrl: string;
  field: string = "charge";
  srchValue: string = "";
  constructor(private router: Router) {
    this.title = 'Tarangini';
    this.logoUrl = "/assets/images/unilever-logo.jpg"
  }
  doSearch() {
    this.router.navigate(["/listConnections"], { queryParams: { field: this.field, srchValue: this.srchValue } });
  }

  doChangeField(field, ele) {
    this.field = field;
    this.srchValue = "";
    switch (field) {
      case 'charge': ele.placeholder = "Cost"; ele.type = "text"; break;
      case 'netSpeed': ele.placeholder = "Net Speed"; ele.type = "text"; break;
      case 'maxUsage': ele.placeholder = "Max Usage"; ele.type = "text"; break;
    }
  }
}