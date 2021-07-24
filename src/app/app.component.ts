import { Component } from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello OKTEN';

  // private xxx: UserService;
  // constructor(xxx: UserService) {
  //   this.xxx = xxx;
  //   this.xxx.doSomeStuff();
  // }

  //   constructor(private xxx: UserService) {            //короткая запись, через запятую можно подключить и др. сервисы
  //      this.xxx.doSomeStuff();
  // }


}
