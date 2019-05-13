import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {HttpclientService} from '../httpclient.service';
import {ConfigformComponent} from '../configform/configform.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data;
  @Output() reload = new EventEmitter<any>();

  public config;
  showForm = false;

  constructor(private http: HttpclientService) {
  }


  ngOnInit() {
  }

  deleteConfig(id) {

    this.http.deleteSNConfig(id).subscribe(data => {
      this.reload.emit('');
    });
  }

  handleUpdate() {
    this.reload.emit('');
  }
}
