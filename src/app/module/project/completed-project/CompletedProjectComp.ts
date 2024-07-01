import {AfterViewInit, Component, OnInit} from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Scrollbar, A11y]);
@Component({
  selector: 'CompletedProjectComp',
  templateUrl: './Completed_ProjectComp.html',
  styleUrls: ['./Completed_ProjectComp.scss']
})
export class CompletedProjectComp implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const swiper = new Swiper(".mySwiper", {
      speed: 400,
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {

        320: { // when window width is < 320px
          slidesPerView: 1
        },
        991: { // when window width is >= 1024px
          slidesPerView: 3
        }
      }
    });


    const middleSlideIndex = Math.floor(swiper.slides.length / 2);

    swiper.slideTo(middleSlideIndex, 0);
  }


}
