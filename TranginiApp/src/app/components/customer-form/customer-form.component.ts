import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { NewConnection } from '../../model/new-connection';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConnectionService } from '../../service/connection.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  connection: NewConnection;
  pkgId: string;
  today: Date = new Date();
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ConnectionService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.connection = new NewConnection();
    this.activatedRoute.params.subscribe(
      (params) => {
        let pkgId = params['title'];
        if (pkgId) {
          this.pkgId = pkgId;
          this.connection.pkgId = pkgId;
          this.connection.dateOfRequest = (new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 4));
        }
      }
    );
  }
  save() {
    this.service.addConnection(this.connection).subscribe(
      (data) => {
        this.router.navigateByUrl("successReport/" + data.orderNumber);
      },
      (error) => { alert("Error adding customer"); }
    );
  }

  /*this.service.addConnection(this.connection).subscribe(
    (data) => {
      this.router.navigateByUrl("/?opt=a&id="+this.connection.mobileNumber);
    },

  );*/
}


