import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;      // declare property (string, number, object)
  age:number;
  email:string;
  address:Address;
  hobbies:string[]; // array of strings, can set type to 'any' to be boolean, string, number, etc
  posts:Post[];

  constructor(private dataService:DataService) { // need to inject services as a dependency in the constructor parameter
    console.log('constructor ran...');           // can set it to anything (dataService) but need to set as :DataService
  }                                              // can now call any function out of the service

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'Erik Tizzle Manizzle';
    this.email = 'email@gmail.com';
    this.age = 27;
    this.address ={         // this corresponds to property delcared above
      street: '100 main',   // will give error if not all object properties are there
      city: 'San Diego',    // will give error if property type is incorrect
      state: 'CA'              // ie number instead of string or zip instead of state
    }
    this.hobbies = ['Code', 'Movies', 'Music']; // need to be strings following declared object

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.name='You clicked the button!!';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby); // hobby comes from the input form on html
    return false;                 
  }

  deleteHobby(hobby){           // passed in hobby just like in html
    console.log(hobby);
    for(let i = 0; i < this.hobbies.length; i++){   // loop through as long as i is less than the length of hobbies
      if(this.hobbies[i] == hobby){   // match, make sure what we are deleting is current iteration
        this.hobbies.splice(i, 1);    // takes in i as the index and deletes just 1
      }
    }
  }
}

interface Address{        // can put this inside of another file (ie models folder)
  street: string,          // import it into this file or other files that you want to use it in
  city: string,
  state: string,
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}