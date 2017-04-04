import { Injectable } from '@angular/core';

import { HttpWrapperService } from './http-wrapper.service';

//import { STARRED } from './mocks/recipes'

@Injectable()
export class StarredService {

  constructor(private httpWrapperService: HttpWrapperService) {}

  public getStarsFromServer(page = 0, limit = 10): Promise<Array<number>> {
    return this.httpWrapperService.get(`http://localhost:3000/stars?page=${page}&limit=${limit}&userId=1`);
  }

  public addToStars(id: number): Promise<any> {
    return this.httpWrapperService.post(`http://localhost:3000/star/${id}?userId=1`);
  }

  public removeFromStars(id: number): Promise<any> {
    return this.httpWrapperService.delete(`http://localhost:3000/star/${id}?userId=1`);
  }

}
