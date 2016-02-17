var now = new Date();

$.each({
  utc: {
    hours: now.getUTCHours(),
    minutes: now.getUTCMinutes()
  },
  local: {
    hours: now.getHours(),
    minutes: now.getMinutes()
  }
}, function (type, values) {

  var minutes = values.minutes;
  var hours = values.hours;
  var meridiem;

  if (hours > 12) {
    hours = hours % 12;
    meridiem = 'PM';
  } else {
    meridiem = 'AM';
  }

  hours = hours || 12; // hour '0' should be '12'

  datalayer.push('time.' + type + 'Time', hours + ':' + minutes + ' ' + meridiem);

});
// learned thanks to https://github.com/thoras
