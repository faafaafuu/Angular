import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: Array<any>;
  // Импортиртирование сервиса при помощи dependency injection 
  // т.к сервис помечен @Injectable при указании(private usersService:UsersService)
  // injector автоматически создает экзэмпляр UsersService и передает ему в конструктор компоненты UserList 
  constructor(private usersService:UsersService) {
    this.users = usersService.getUsers()
   }

  ngOnInit() {
  }

}
