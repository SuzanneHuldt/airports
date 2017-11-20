describe('weather', function() {
  var generator;

  beforeEach(function() {
    generator = new Weather();
  });

  describe('when high random value', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(1);
    });

    it('returns stormy if the probability is greater than 0.9', function() {
      expect(generator.weather()).toEqual(true);
    });
  });

  describe('when low random value', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0);
    });

    it('returns stormy if the probability is less than 0.9', function() {
      expect(generator.weather()).toEqual(false);
    });
  });
});
