export const DATA_KEY = "weather_data";
export const DATA_KEY_USER = "user_data";
const header = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "8ecc96afd7mshb2cd585157a748ep1e8143jsn4b75af5a8309",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
  },
};

export class ApiCaller {
  constructor() {
    this.callData("London");
    this.callData("warsaw");
    this.callData("boston");
  }

  async callData(city?: string) {
    if (city) {
      const weather = await this.getWeatherData(city);
      if (weather.cod == 200) {
        this.saveData(weather);
      }
    }
  }

  async getWeatherData(city: string) {
    const apiURL = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=%22metric%22%20or%20%22imperial%22`;
    const weatherResp = await fetch(apiURL, header);
    const weatherData = await weatherResp.json();
    return weatherData;
  }

  saveData(data: any) {
    const currentData = this.getData();
    const indexInLS = currentData.findIndex((val: any) => val.id === data.id);
    if (indexInLS !== -1) {
      currentData[indexInLS] = data;
      localStorage.setItem(DATA_KEY, JSON.stringify(currentData));
      return;
    }

    localStorage.setItem(DATA_KEY, JSON.stringify([...currentData, data]));
  }

  saveDataUser(data: any) {
    localStorage.setItem(DATA_KEY_USER, JSON.stringify(data));
  }

  getDataUser(): any {
    const data = localStorage.getItem(DATA_KEY_USER);
    if (data) return JSON.parse(data);
    return [];
  }

  getData(): any {
    const data = localStorage.getItem(DATA_KEY);
    if (data) return JSON.parse(data);
    return [];
  }
}
