import { Component } from '@angular/core';
//Декоратор описывающий св-ва компонента
@Component({
  // Методанные
  selector: 'app-root',
  // Файл шаблона
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Определение логики Component 
export class AppComponent {
  title = 'app'; 
}
