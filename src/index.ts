import "./style.scss";
import { ApiCaller } from "./apiCaller";
import { UI } from "./UI";
import { User } from "./User";

export class Main {
  apiCaller: ApiCaller;
  UI: UI;
  User: User;
  weatherData: any[];
  constructor() {
    this.apiCaller = new ApiCaller();
    this.UI = new UI(this);
    this.User = new User(this);

    this.weatherData = this.apiCaller.getData();

    this.bindInputEvents();
  }

  bindInputEvents() {
    let self = this;
    setTimeout(function () {
      self.UI.renderWeatherList(self.weatherData);
    }, 3000);
    const registerForm = document.getElementById("form1");
    const loginForm = document.getElementById("formLogin");
    const formFlight = document.getElementById("formFlight");

    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.User.register();
    });

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.User.login();
    });

    formFlight.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(this.apiCaller.getDataUser());
      if (this.apiCaller.getDataUser().length < 1) {
        alert("You must loggIn");
        return;
      }
      this.UI.flightPlan(event);
      const bookBtn = document.querySelectorAll(".bookBtn");
      // funkcja z book
      bookBtn.forEach((element) => {
        return element.addEventListener("click", this.UI.book);
      });
    });
  }
}

new Main();
