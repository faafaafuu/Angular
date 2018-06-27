// Сгенерированный сервис - ng generate service users
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor() { }

  public getUsers(): Array<any> {
      return [
      {name:'Vasya',lastName:'Petrov'},
      {name:'Max',lastName:'Kortashov'},
      {name:'Semen',lastName:'Semenov'}
    ];
  }

}
