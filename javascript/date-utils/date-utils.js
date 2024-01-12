const location = 'pt-br';

const dateComponents = {
  addDays(days, d) {
    const date = d === undefined ? new Date() : new Date(d);
    date.setDate(date.getDate() + days);
    return date;
  },

  formatDate(d, expression) {
    let date = d;
    if (expression === undefined) {
      console.warn('Expression is undefined. Returning empty string.');
      return '';
    }
    if (!(date instanceof Date)) {
      // try convert to Date object
      try {
        date = new Date(date);
      } catch (error) {
        // if not possible, return empty string
        console.warn(`Error in date format: ${date}`);
        console.warn(error);
        return '';
      }
    }

    return format(date, expression);
  },

};

function format(date, expression) {
  let stringDate = expression;
  // try format month
  stringDate = stringDate.replace(/M{1,4}/ug, (key) => getMonth(date, key));
  // try format year
  stringDate = stringDate.replace(/Y{2,4}/ug, (key) => getYear(date, key));
  // try format day
  stringDate = stringDate.replace(/D{1,2}/ug, (key) => getDay(date, key));
  // try format hour
  stringDate = stringDate.replace(/H{1,2}|h{1,2}/ug, (key) => getHour(date, key));
  // try format minute
  stringDate = stringDate.replace(/m{1,2}/ug, (key) => getMinute(date, key));
  // try format second
  stringDate = stringDate.replace(/s{1,2}/ug, (key) => getSecond(date, key));
  // try format day of the week
  stringDate = stringDate.replace(/d{2,3}/ug, (key) => getdDayOfTheWeek(date, key));

  return stringDate;
}

function getMonth(date, key) {
  const monthsFunction = {
    'M': function stftimeM() {
      return (date.getMonth() + 1).toString();
    },
    'MM': function stftimeMM() {
      return (date.getMonth() + 1).toString().padStart(2, '0');
    },
    'MMM': function stftimeMMM() {
      const month = date.toLocaleString(location, { month: 'short' });
      return month.charAt(0).toUpperCase() + month.slice(1);
    },
    'MMMM': function stftimeMMMM() {
      const month = date.toLocaleString(location, { month: 'long' });
      return month.charAt(0).toUpperCase() + month.slice(1);
    },
  };
  const month = monthsFunction[key];

  if (month !== undefined) {
    return month();
  }

  return '0';
}

function getYear(date, key) {
  const yearsFunction = {
    'YY': function stftimeYY() {
      return date.getFullYear().toString().substr(2, 2);
    },
    'YYYY': function stftimeYYYY() {
      return date.getFullYear().toString();
    },
  };
  const year = yearsFunction[key];

  if (year !== undefined) {
    return year();
  }

  return '0';
}

function getDay(date, key) {
  const daysFunction = {
    'D': function stftimeD() {
      return date.getDate().toString();
    },
    'DD': function stftimeDD() {
      return date.getDate().toString().padStart(2, '0');
    },
  };
  const day = daysFunction[key];

  if (day !== undefined) {
    return day();
  }

  return '0';
}

function getdDayOfTheWeek(date, key) {
  const daysFunction = {
    'dd': function stftimeDDD() {
      return date.toLocaleString(location, { weekday: 'short' });
    },
    'ddd': function stftimeDDDD() {
      return date.toLocaleString(location, { weekday: 'long' });
    },
  };
  const day = daysFunction[key];

  if (day !== undefined) {
    return day();
  }

  return '0';
}

function getHour(date, key) {
  const hoursFunction = {
    'H': function stftimeH() {
      return date.getHours().toString();
    },
    'HH': function stftimeHH() {
      return date.getHours().toString().padStart(2, '0');
    },
    'h': function stftimeH() {
      return (date.getHours() % 12).toString();
    },
    'hh': function stftimeHH() {
      return (date.getHours() % 12).toString().padStart(2, '0');
    },
  };
  const hour = hoursFunction[key];

  if (hour !== undefined) {
    return hour();
  }

  return '0';
}

function getMinute(date, key) {
  const minutesFunction = {
    'm': function stftimeM() {
      return date.getMinutes().toString();
    },
    'mm': function stftimeMM() {
      return date.getMinutes().toString().padStart(2, '0');
    },
  };
  const minute = minutesFunction[key];

  if (minute !== undefined) {
    return minute();
  }

  return '0';
}

function getSecond(date, key) {
  const secondsFunction = {
    's': function stftimeS() {
      return date.getSeconds().toString();
    },
    'ss': function stftimeSS() {
      return date.getSeconds().toString().padStart(2, '0');
    },
  };
  const second = secondsFunction[key];

  if (second !== undefined) {
    return second();
  }

  return '0';
}

export default dateComponents;

export function setDateInBrazilianFormat(date) {
  const dataObj = new Date(date);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

  return new Intl.DateTimeFormat('pt-BR', options).format(dataObj);
}
