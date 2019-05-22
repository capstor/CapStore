import { Component, OnInit } from '@angular/core';
import { Customer } from '../../pojo/customer';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
 inputModel:any;
  

  constructor() { }

  ngOnInit() {
  }

}
