import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export class Data {
  constructor(public review1: string, public review2: string) { }
}

@Injectable()
export class DataService {
  constructor(private _http: Http) { }

  getData(){
        return this._http.get('https://shankarsiddharth.github.io/sample_data.json').map(res => res.json());
  }

  postData(review1 : string, review2 : string){
      //console.log(userData);
      let body = JSON.stringify({ "review1": review1,"review2": review2});
      console.log(body);
      let headers = new Headers({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin' : '*'});
      let options = new RequestOptions({ headers: headers});
      //
      /*return this._http.post('https://requestb.in/1212ikn1', body, options)
          .toPromise()
          .then(res => res.text)
          .catch(this.handleError);*/
        return this._http.post('http://requestb.in/19mqp121', body, options)
          .map(res => res.statusText)
          .catch(this.handleError);
  }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}
