import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
date: any;
  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
    console.log(this.date);
   
  }


  

}
