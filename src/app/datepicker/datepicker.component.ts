import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as englishmonthday from './english-month-day.model';
import { CalendarService } from './calendar.service';
import { of } from 'rxjs/observable/of';
import * as dateDatas from '../../../data/datas.json';


@Component({
  selector: 'nepali-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [CalendarService]
})
export class NepaliDatepickerComponent implements OnInit {


  @Output() notifydateChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  @ViewChild('eRef', {static: false}) eRef: ElementRef;
  @ViewChild('calendar', {static: false}) calendar: ElementRef;

  value: string = '';
  engmonth = englishmonthday.EnglishMonthDay;


  // variable declerations
  fetchedYear: any;
  date: string;
  monthData: any[];
  years: any[];

  // Default date
  day: string;
  month: string;
  year: string;

  // Available Year range
  maxYear: string;
  minYear: string;

  // Months
  months: string[];

  // Holds selected date
  selectedDate: any;

  // Additional flags
  isCalendarHidden: boolean;
  isLoading: boolean;

  startingDayIndex: number;

  // Dicument click handler
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef && this.eRef.nativeElement.contains(event.target)) {
      this.showCalendar();
    } else {
      if (this.calendar) {
        this.hideCalendar();
      }
    }
  }

  /**
   * Datepicker Component Constructor
   * @param  {CalendarService} CalendarService
   */
  constructor(private calendarService: CalendarService) {
    this.monthData = [];
    this.years = [];

    this.day = '9';
    this.month = 'Ashwin';
    this.year = '2070';

    this.maxYear = '2090';
    this.minYear = '2003';

    this.months = [
      'Baishakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra', 'Ashwin',
      'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'
    ];

    this.selectedDate = {
      day: '',
      month: '',
      year: ''
    };

    this.isCalendarHidden = true;
    this.isLoading = true;

    // Loads dropdowns  of years
    this.loadDropDowns();
  }

  // On Component Initialiazation
  ngOnInit() {
    if (this.value) {
      const selected: any = this.value.split(' ');
      const date: any = selected.toString().split(',');

      this.selectedDate.day = this.day = date[0];
      this.selectedDate.month = this.month = date[1];
      this.selectedDate.year = this.year = date[3];
    }
  }

  /**
   * Updates datepicker value
   * @param data
   */
  callParent(data) {
    // this.callback.emit({
    //   key: this.id,
    //   data: data
    // });
  }

  /**
   * Captures the payload sent form month component
   * Used to display the selected date
   * @param {string} message
   */
  onNotify(data: any[]) {
    this.date = data[0] + ' ' + data[1] + ', ' + data[2];
    this.day = data[0];
    this.callParent(this.date);
    this.hideCalendar();

    let selectedMonth = this.engmonth.monthNumbr(data[1]);
    this.notifydateChange.emit([data[0], selectedMonth, data[2]]);
    this.value = data[2] + '-' + selectedMonth + '-' + data[0];
  }

  /**
   * Load the select options for year and months dropdowns
   */
  loadDropDowns() {
    for (let i = parseInt(this.minYear); i <= parseInt(this.maxYear); i++) {
      this.years.push(i);
    }
  }

  /**
   * Populates the month data in the calendar month view
   * @param  {string} month
   */
  loadData(month) {
    this.monthData = this.fetchedYear[month];
    var weekDays = ['आइत', 'सोम', 'मगल', 'बुध', 'बिहि', 'शुक्र', 'शनि'];
    this.startingDayIndex = weekDays.indexOf(this.monthData[0].bar);
  }

  DataObservable = of(dateDatas);

  /**
   * Get the year's data  and populate the data to the calander
   */
  fetchData(year) {
    this.isLoading = true;

    this.DataObservable.subscribe(
      (response) => {
        this.fetchedYear = (response as any).default[year];
        this.loadData(this.month);
        this.isLoading = false;
      },
      (error) => console.log(error)
    );
  }

  /**
   * Handler for next button click in caledar
   */
  nextMonth() {
    let index = this.months.indexOf(this.month);

    if (index < 11) {
      this.month = this.months[++index];
      this.loadData(this.months[index]);
    } else {
      if ((parseInt(this.year) + 1) <= parseInt(this.maxYear)) {
        this.year = (parseInt(this.year) + 1).toString();
        this.month = this.months[0];
        this.fetchData(this.year);
      } else {
        console.log('Unavailable next year' + (parseInt(this.year) + 1) + ' max : ' + this.maxYear);
      }
    }
  }

  /**
   * Handler for previous button click in caledar
   */
  previousMonth() {
    let index = this.months.indexOf(this.month);

    if (index >= 1) {
      this.month = this.months[--index];
      this.loadData(this.months[index]);
    } else {
      if ((parseInt(this.year) - 1) >= parseInt(this.minYear)) {
        this.year = (parseInt(this.year) - 1).toString();
        this.month = this.months[11];
        this.fetchData(this.year);
      } else {
        console.log('Unavailable previous date');
      }
    }
  }

  /**
   * Shows datepicker calendar
   */
  showCalendar() {
    this.isCalendarHidden = false;
    return this.fetchData(this.year);
  }

  /**
   * Hides the calendar datepicker
   */
  hideCalendar() {
    this.isCalendarHidden = true;
  }

  /**
   * Loads the year's data form server on year change
   * @param  {string} year
   * @return {object}
   */
  onYearChange(year) {
    this.fetchData(year);
  }

  /**
   * Loads the month data form server on month change
   * @param  {string} month
   * @return {object}
   */
  onMonthChange(month) {
    return this.loadData(month);
  }
}


