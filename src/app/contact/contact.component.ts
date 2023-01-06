import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //triggers the html page to scroll to a specific element

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}

}
