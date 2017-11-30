import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/api/phones";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class PhoneService {
  constructor(private http: Http) {}

  getPhoneList():Observable<any>{
      return this.http.get(BASEURL)
                      .map(res => res.json());
  }

  getPhoneByID(id):Observable<any>{
      return this.http.get(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }

  deletePhone(id){
      return this.http.delete(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }

}
