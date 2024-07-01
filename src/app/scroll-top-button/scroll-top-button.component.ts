import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top-button',
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.scss']
})
export class ScrollTopButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.pageYOffset > 500;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
