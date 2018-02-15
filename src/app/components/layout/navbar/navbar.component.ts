import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  toggle = false;
  sidebar = false;
  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    this.toggle = !this.toggle;
  }

  hideSidebar() {
    this.sidebar = !this.sidebar;
  }
}
