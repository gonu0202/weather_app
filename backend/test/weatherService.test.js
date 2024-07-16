const chai = require('chai');
const axios = require('axios');
const weatherService = require('../src/services/weatherService');
const expect = chai.expect;

describe('weatherService', () => {
  it('should return weather data for a valid city', async () => {
    const data = await weatherService.getWeatherByCity('London');
    expect(data).to.have.property('temperature');
    expect(data).to.have.property('humidity');
    expect(data).to.have.property('windSpeed');
    expect(data).to.have.property('description');
  });

  it('should throw an error for an invalid city', async () => {
    try {
      await weatherService.getWeatherByCity('InvalidCity');
    } catch (error) {
      expect(error.message).to.equal('City not found or other error');
    }
  });
});
