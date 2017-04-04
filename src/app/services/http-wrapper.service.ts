import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpWrapperService {
  constructor(private http: Http) { }

  public get(url: string): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public post(url: string, body?: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, body, headers)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public delete(url: string, options?: any) {
    return this.http.delete(url, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);;
  }

  private extractData(res: Response) {
    //taken from angular.io
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    //taken from angular.io
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}
