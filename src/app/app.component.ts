import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  []
})
export class AppComponent {
  title: string;
  defaultDate:string='2077-08-10';

  /**
   * AppComponemt Constructor
   * @param  {object} service
   */
  constructor() {
    this.title = 'Nepali Date Picker';
  }

  OnDateChanged(event:any){
      console.log(event);
  }
}
