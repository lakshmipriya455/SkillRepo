import { Component, OnInit } from '@angular/core';
import { ServicePackage } from '../../model/service-package';
import { PlansService } from '../../service/plans.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-connections',
  templateUrl: './list-connections.component.html',
  styleUrls: ['./list-connections.component.css']
})
export class ListConnectionsComponent implements OnInit {
  packages: ServicePackage[];
  constructor(private plansService: PlansService
    , private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        let field = params['field'];
        let srchValue = params['srchValue'];
        console.log(field + ":" + srchValue);
        if (field && srchValue) {
          this.plansService.searchPackages(field, srchValue).subscribe(
            (data) => this.packages = data,
            (err) => this.packages = undefined
          );
        } else {
          this.plansService.getAllPackages().subscribe(
            (data) => this.packages = data,
            (err) => this.packages = undefined
          );
        }
      }, (err) => this.packages = undefined
    );

  }

}
