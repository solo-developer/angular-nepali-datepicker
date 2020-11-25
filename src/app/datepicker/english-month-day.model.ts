export class EnglishMonthDay {

    static findlastdayofmonth(thismonth) {
      var daysperMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var daysperMonthInLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
      let year = new Date().getFullYear();
  
      if (year % 4 === 0 && year % 100 !== 0)
        return daysperMonthInLeapYear[thismonth];
      else
        return daysperMonth[thismonth];
    }
  
    static findmonth(thismonth) {
      var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
      return months[thismonth -1];
    }
  
    static monthNumbr(month) {
      var months = [
        'Baishakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra', 'Ashwin',
        'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'
      ];
  
      for (var i = 0; i < months.length; i++) {
  
        if (months[i].toLowerCase() === month.toLowerCase()) {
          if (i < 9)
            return "0" + (i + 1).toString();
          else
            return (i + 1).toString();
        }
      }
    }
    
  }
  