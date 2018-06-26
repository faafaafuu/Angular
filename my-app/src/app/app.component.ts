//Библтотека ag - @angular/core
import { Component } from '@angular/core';
//Декоратор описывающий св-ва компонента
@Component({
  // Методанные
  // <tag> внутри которого будет разворачиваться компонент, 
  //root - указывает на то, что этот элемент является корневым и все остальные компоненты строятся кнутри этого элемента
  // 'app-root' - кастомная директива
  selector: 'app-root',
  // Файл шаблона
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
  onBtnClick() {
    return this.title = 'That\'s how it working Event Binding'
  }
}
