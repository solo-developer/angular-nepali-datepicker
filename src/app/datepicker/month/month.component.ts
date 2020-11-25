import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html'
})
export class MonthComponent implements OnInit {
  @Output() notify: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() monthData: any[];
  @Input() selectedDate: any;
  @Input() month: string;
  @Input() year: string;
  @Input() day: string;

  weekDays: any[];

  @Input() startingDayIndex: number;

  constructor() {

  }

  ngOnInit() {
    this.weekDays = ['आइत', 'सोम', 'मगल', 'बुध', 'बिहि', 'शुक्र', 'शनि'];
  }

  /**
   * Create chuncks of array of given size
   * @param  {Array} arr
   * @param  {Number} chunkSize
   * @return {Array}
   */
  weeklyChunk(arr, chunkSize) {
    let groups = [], i;

    for (i = 0; i < arr.length; i += chunkSize) {
      groups.push(arr.slice(i, i + chunkSize));
    }

    return groups;
  }

  /**
   * Selects date and send to to the listener
   * @param  {Object} date
   */
  selectDate(date) {
    this.notify.emit([date, this.month, this.year]);
  }

  createRange() {

    var noOfDaysInMonth = this.monthData.length;
    var firstDayIndexInAWeek = this.startingDayIndex;

    var weeksCountInAMonth = Math.ceil((firstDayIndexInAWeek + noOfDaysInMonth) / 7);

    var items: number[] = [];
    for (var i = 1; i <= weeksCountInAMonth; i++) {
      items.push(i);
    }
    return items;
  }

  createDayRangeInWeek() {
    var items: number[] = [];
    for (var i = 1; i <= 7; i++) {
      items.push(i);
    }
    return items;
  }
}
