// Angular core Modules
import { NgModule }               from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CalendarService }        from './datepicker/calendar.service';

// Components
import { AppComponent }           from './app.component';
import { NepaliDatepickerComponent }    from './datepicker/datepicker.component';
import { MonthComponent }         from './datepicker/month/month.component';

// Module decorator
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NepaliDatepickerComponent,
    MonthComponent
  ],
  providers: [CalendarService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
