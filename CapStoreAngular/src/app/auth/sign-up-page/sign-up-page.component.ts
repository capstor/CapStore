import { Component, OnInit } from '@angular/core';
import { Customer } from '../../pojo/customer';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
 
 cust:Customer[];
 

  constructor() { }

  ngOnInit() {
  }

}
