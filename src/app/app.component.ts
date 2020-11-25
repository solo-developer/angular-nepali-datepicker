import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  []
})
export class AppComponent {
  title: string;

  /**
   * AppComponemt Constructor
   * @param  {object} service
   */
  constructor() {
    this.title = 'Nepali Date Picker';
  }
}
