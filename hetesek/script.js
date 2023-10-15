Date.prototype.getWeek = function () {
  var onejan = new Date(this.getFullYear(), 0, 1);
  var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
  var dayOfYear = ((today - onejan + 86400000) / 86400000);
  return Math.ceil((dayOfYear / 7))
};

var today = new Date()
var currentWeekNumber = today.getWeek()
if (today.getWeek() > 36) { currentWeekNumber = (today.getWeek() - 36) }
if (36 >= today.getWeek() && today.getWeek() > 24) { currentWeekNumber = (today.getWeek() - 24)}
if (24 >= today.getWeek() && today.getWeek() > 4) { currentWeekNumber = (today.getWeek() - 4)}
if (today.getWeek() <= 4) {currentWeekNumber = (today.getWeek() + 16)}

if (currentWeekNumber <= 16) {
  document.querySelector(`div#week${currentWeekNumber} .box`).style.backgroundColor = '#6C3483'
  document.querySelector(`div#week${currentWeekNumber} .box0`).style.backgroundColor = '#6C3483'
}

if (currentWeekNumber > 16) {
  document.querySelector(`div#week${currentWeekNumber} .box1`).style.backgroundColor = '#6C3483'
}