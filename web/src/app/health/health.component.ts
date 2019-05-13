import {Component, OnInit} from '@angular/core';
import {HttpclientService} from '../httpclient.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  health = null;

  constructor(private postman: HttpclientService) {
  }

  ngOnInit() {

    this.postman.getHealth().subscribe(resp => {

      this.health = resp;
    });
  }

}
