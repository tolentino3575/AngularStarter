import { Component, OnInit } from '@angular/core';

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

  constructor() { 
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'Erik Tizzle Manizzle';
    this.age = 27;
    this.address ={         // this corresponds to property delcared above
      street: '100 main',   // will give error if not all object properties are there
      city: 'San Diego',    // will give error if property type is incorrect
      state: 'CA'              // ie number instead of string or zip instead of state
    }
    this.hobbies = ['Code', 'Movies', 'Music']; // need to be strings following declared object
  }

  onClick(){
    this.name='You clicked the button!!';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }
}

interface Address{        // can put this inside of another file (ie models folder)
  street:string;          // import it into this file or other files that you want to use it in
  city:string;
  state:string;
}