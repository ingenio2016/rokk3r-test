import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  toggleMenu = false;
  sidebar = false;
  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    this.toggleMenu = !this.toggleMenu;
  }

  hideSidebar() {
    this.sidebar = !this.sidebar;
  }
}
