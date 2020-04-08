import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addInIcon(id: any){
    this.total += 1;
    console.log(id);
 }
}
