var DEFAULT_STORM = 0.9;

function Weather(storm_chance) {
  this.storm_chance = storm_chance || DEFAULT_STORM;
};

Weather.prototype.weather = function() {
  return Math.random() > this.storm_chance;
};
