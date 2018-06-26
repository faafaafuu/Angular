// Корневой элемент ag-app
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRootSecComponent } from './app-root-sec/app-root-sec.component';

// Св-ва деоратора - массивы 
@NgModule({
  //Импользуемые компоненты (каждый компонент може�,
  //AppRootSecComponent� быть зарегистрирован только в 1м модуле)
  declarations: [
    AppComponent,
    AppRootSecComponent
  ],
  // Названия внешних модулей
  imports: [
    BrowserModule
  ],
  // Сервисы
  providers: [],
  // Корневые компоненты (доб.)
  // cmd~ ng generate component appRoot..
  bootstrap: [AppComponent, AppRootSecComponent]
})
// TypeScript class c декоратором @NgModule
export class AppModule { }
