describe('Jasmine基礎', function() {
  var area;

  beforeEach(function() {
    area = new MyArea(10, 5);
  });

  afterEach(function() {
  });

  it('getTriangle方法的測試', function() {
    expect(area.getTriangle()).toEqual(25);
  });

  it('getSquare方法的測試', function() {
    expect(area.getSquare() === 50).toBeTruthy();
  });
});