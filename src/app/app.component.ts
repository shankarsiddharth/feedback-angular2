import { Component } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions  }    from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DataService } from '../app/app.data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataService]
})
export class AppComponent {
  review1 : string;
  review2 : string;
constructor(private dataService : DataService) {
 }
 
  load () {
    //this.review1 = "qwerty";
    //this.review2 = "asdfg";
    this.dataService.getData()
        .subscribe(data => { console.log(data); this.review1 = data.review1; this.review2 = data.review2;},
        err => console.error(err),
        () => console.log('done')); 

  /*this.http.get('https://shankarsiddharth.github.io/sample_data.json')
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.review1 = data.review1; this.review2 = data.review2;},
        err => console.error(err),
        () => console.log('done')
      ); */

  }
  submit () {
    console.log("Review 1: " + this.review1);
    console.log("Review 2: " + this.review2);
      let userData = { "review1":this.review1,"review2":this.review2};
      /*let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers, method: "post" });

      return this.http.post('http://requestb.in/1a969ou1', body,options)
          .map(res => res.json());*/

        /*this.dataService.postData(this.review1, this.review2)
          .then(data => console.log(data))
          .catch(err => console.log(err));*/
        this.dataService.postData(this.review1, this.review2)
          .subscribe(data => console.log(data));
  }
}
