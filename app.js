var pikesPlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  timeOfDay: ['Ten:', 'Eleven:', 'Twelve:', 'One:', 'Two:', 'Three:', 'Four:', 'Five:'],

  randCustPerHour: function(min, max) {
    return Math.random() * (max - min + 1) + min;
  },

  numberCookiesPerHour: function() {
    for (i = 0; i < 7; i++) {
      document.write(pikesPlace.timeOfDay[i] + Math.floor(this.randCustPerHour(pikePlace.min, pikePlace.max)*(pikePlace.avg)))
    }

  },
  liEl: document.getElementById("timeOfDay"),
  timeOfDay.textContent = pikePlace.render(),
}
