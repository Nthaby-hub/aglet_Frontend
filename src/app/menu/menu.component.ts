import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  isMenuOpen = false;
  pageIsScrolled = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll")
  scrollEvent() {
    window.pageYOffset >= 80 ? (this.pageIsScrolled = true) : (this.pageIsScrolled = false);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
