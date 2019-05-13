import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getSNConfig() {

    return this.http.get(this.url + '/config');

  }

  deleteSNConfig(id) {
    return this.http.delete(this.url + '/config/' + id);
  }

  insertSNConfig(data) {
    return this.http.post(this.url + '/config', data);
  }

  updateSNConfig(id, data) {
    return this.http.put(this.url + '/config/' + id, data);
  }

  getHealth() {
    return this.http.get(this.url + '/instance-health');
  }
}
