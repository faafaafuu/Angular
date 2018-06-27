//Библтотека ag - @angular/core
import { Component } from '@angular/core';
import { UserTableComponent } from './user-table/user-table.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersService } from './users.service';
//Декоратор описывающий св-ва компонента
@Component({
  // Методанные
  // <tag> внутри которого будет разворачиваться компонент, 
  //root - указывает на то, что этот элемент является корневым и все остальные компоненты строятся кнутри этого элемента
  // 'app-root' - кастомная директива
  selector: 'app-root',
  // Файл шаблона
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
// Определение логики Component 
export class AppComponent {
  title = 'my app';
  // Cв-во типа Array, any - в качестве типа данных ( позволяет поместить этот массив данные люб.тип.)
  users: Array<any> = [
    {name: 'One'},
    {name: 'Two'},
    {name: 'Three'},
    {name: 'Four'}
  ];    
  date: Date = new Date();
  onBtnClick() {
    return this.title = 'That\'s how it working Event Binding'
  }
}
