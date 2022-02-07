import * as fromWeather from './weather.actions';

describe('tcsWeathers', () => {
  it('should return an action', () => {
    expect(fromWeather.tcsWeathers().type).toBe('[Weather] TCS Weathers');
  });
});
