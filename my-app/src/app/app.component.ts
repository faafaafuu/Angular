//Библтотека ag - @angular/core
import { Component } from '@angular/core';
//Декоратор описывающий св-ва компонента
@Component({
  // Методанные
  // <tag> внутри которого будет разворачиваться компонент, 
  //root - указывает на то, что этот элемент является корневым и все остальные компоненты строятся кнутри этого элемента
  selector: 'app-root',
  // Файл шаблона
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Определение логики Component 
export class AppComponent {
  title = 'app'; 
}
