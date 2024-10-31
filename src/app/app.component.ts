import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Profile', url: '/folder/profile', icon: 'person' },
  ];
  public labels = ['Notes', 'Work', 'Reminders'];
  constructor() {}
}
