import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {           // Http is a service so it needs to be injected into constructor
    console.log('Data service connected');  // can name it anything (http) but need to set to the service (:Http)
  }

  getPosts(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts')  // this.http is whatever we called it when we injected into constructor (http)
      .map(res => res.json());                                         // http could have been called anything
  }   // get request returns an observable so we need to use .map from rxjs                            
      // take response (res) and map to json (res.json), return all posts from url as json
}
