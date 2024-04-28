import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private httpService: HttpRoutingService) { }
  getProfile(url: string) {
    return this.httpService.getMethod(url)
    // return {
    //   isProfile: true,
    //   data: {
    //     name: "senthil",
    //     id: 7,
    //     selectedId: 1
    //   }
    // }

  }
}
