import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';

@Component({
  selector: 'DonationComp',
  templateUrl: './DonationComp.html',
  styleUrls: ['./DonationComp.scss']
})
export class DonationComp implements OnInit {
  @ViewChild('donateAmountSection', { static: true }) donateAmountSection!: ElementRef;
  @ViewChild('donateAmountMonthly', { static: true }) donateAmountMonthly!: ElementRef;
  @ViewChild('donateAmountForm', { static: true }) donateAmountForm!: ElementRef;
  @ViewChild('donateAmountMethod', { static: true }) donateAmountMethod!: ElementRef;
  @ViewChild('donateAmountQR', { static: true }) donateAmountQR!: ElementRef;

  scrollToSection(section: string): void {
    switch (section) {
      case 'donateAmountSection':
        this.donateAmountSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'donateAmountMonthly':
        this.donateAmountMonthly.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'donateAmountForm':
        this.donateAmountForm.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'donateAmountMethod':
        this.donateAmountMethod.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'donateAmountQR':
        this.donateAmountQR.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
