// Сгенерированный сервис - ng generate service users (сервис userService)
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public createDate: Date = new Date();
  public clickCount: number = 1;
  public i() {
    return this.clickCount++;
  };

  constructor() { }

  public getUsers(): Array<any> {
      return [
      {name:'Vasya',lastName:'Petrov'},
      {name:'Max',lastName:'Kortashov'},
      {name:'Semen',lastName:'Semenov'}
    ];
  }

}
