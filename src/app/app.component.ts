import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //getUsers = 'http://localhost:8080/projectClient/webservice/user/Json';
  getUsers='http://localhost:8080/dukes/resources/dukes';

  exampleName = [{ name: 'first', lname: 'second', adress: 'somewhere', postcode: '23', city: 'athens', tel: '1234578' }];

  constructor(private http: Http) {

  }


  ngOnInit() {
    this.http.get(this.getUsers).toPromise().then(r => r.json()).then(r => this.exampleName = r);
  }

}
