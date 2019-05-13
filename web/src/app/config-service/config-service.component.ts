import {Component, OnInit} from '@angular/core';
import {HttpclientService} from '../httpclient.service';

@Component({
  selector: 'app-config-service',
  templateUrl: './config-service.component.html',
  styleUrls: ['./config-service.component.scss']
})
export class ConfigServiceComponent implements OnInit {

  constructor(private http: HttpclientService) {
  }

  public config;
  showForm = false;

  ngOnInit() {
    this.getConfig();

  }

  getConfig() {

    this.http.getSNConfig().subscribe(data => {

      this.config = data;
    });
  }

  handleRefresh() {
    this.getConfig();
  }
}
