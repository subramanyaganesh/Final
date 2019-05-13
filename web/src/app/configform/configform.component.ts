import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import * as assert from 'assert';
import {HttpclientService} from '../httpclient.service';

@Component({
  selector: 'app-configform',
  templateUrl: './configform.component.html',
  styleUrls: ['./configform.component.scss']
})
export class ConfigformComponent implements OnInit {
  @Input() id;
  @Output() reload = new EventEmitter<any>();

  configFormData = {
    instance: '',
    username: '',
    password: '',
    tag: '',
    id: null

  };


  constructor(private postman: HttpclientService) {
  }

  ngOnInit() {

    if (this.id != null) {
      this.configFormData.id = this.id;

    }
  }

  onSubmit() {

    if (this.id == null) {

      this.postman.insertSNConfig(this.configFormData).subscribe(resp => {
        this.reload.emit();
      });

    } else {


      this.postman.updateSNConfig(this.id, this.configFormData).subscribe(resp => {
        this.reload.emit();
      });
    }

  }


}

