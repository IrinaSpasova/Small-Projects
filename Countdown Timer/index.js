/*
The HTML:


<div class="container">
  <div class="row">
    <div class="col">
      <div id="clock" class="card card-default">
        <div class="card-body">
          <h2 class="card-title mb-4">Countdown to 2020</h2>
          <div class="clock-section">
            <div id="days" class="value text-warning">00</div>
            <div class="clock-label">DAYS</div>
          </div>
          <div class="clock-section">
            <div id="hours" class="value text-warning">00</div>
            <div class="clock-label">HOURS</div>
          </div>
          <div class="clock-section">
            <div id="minutes" class="value text-warning">00</div>
            <div class="clock-label">MINUTES</div>
          </div>
          <div class="clock-section">
            <div id="seconds" class="value text-warning">00</div>
            <div class="clock-label">SECONDS</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

*/


/*
The CSS:


body {  background-color: #f7fafd; }

#clock {
  text-align: center;
  margin-top: 20px;
  border: none;
  box-shadow: 0 0 10px rgba(96,134,181,.3);
}

.clock-section { display: inline-block; }

.clock-section .value {
  width: 100px;
  height: 100px;
  line-height: 100px;
  background-color: #333;
  text-align: center;
  border-radius: 10px;
}
.value {
  font-size: 50px;
  color: #00ff00;
}
}
.clock-label {
  text-align: center;
  padding-top: 4px;
  font-size: 11px;
}
*/


// This use  Moment.js and jQuery!!!

var targetDate = moment('1/1/2023');

var $days = $('#days'),
    $hours = $('#hours'),
    $minutes = $('#minutes'),
    $seconds = $('#seconds');

setInterval(function() {
  // Calculate the time remaining
  var now = moment();
  var timeLeft = moment.duration(targetDate.diff(now));
  updateClock(timeLeft);
}, 10);

function updateClock(remainingTime) {
  // Display the difference
  var days = Math.floor(remainingTime.asDays()),
      hrs = Math.floor(remainingTime.asHours()) % 24,
      mins = Math.floor(remainingTime.asMinutes()) % 60,
      secs = Math.floor(remainingTime.asSeconds()) % 60;
  $('#days').text(padNumber(days));
  $('#hours').text(padNumber(hrs));
  $('#minutes').text(padNumber(mins));
  $('#seconds').text(padNumber(secs));
}

function padNumber(number) {
  var formattedNum = number;
  if (number < 10) {
    formattedNum = "0" + formattedNum;
  }
  return formattedNum;
}
