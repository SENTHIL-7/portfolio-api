import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-home-banner',
  templateUrl: './basic-home-banner.component.html',
  styleUrls: ['./basic-home-banner.component.scss']
})
export class BasicHomeBannerComponent {
  constructor(private router: Router){}
  @Input() data: any;
  navigate(){
    this.router.navigate(['/portfolio/senthil/contactus'])
  }
}
