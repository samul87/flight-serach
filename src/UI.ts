import "./style.scss";

import { IWeatherData } from "./interface";

import { Main } from "./index";

enum LIST_ELEMTNS {
  name = "name",
  temp = "temp",
  pressure = "press",
  icon = "icon",
}

enum WEATHER_TYPES {
  thunderstorm = "2",
  drizzle = "3",
  rain = "5",
  snow = "6",
  atmosphere = "7",
  clear = "8",
}

export class UI {
  mainContext: Main;
  constructor(main: Main) {
    this.mainContext = main;
  }

  flightPlan(event: Event) {
    const destination = document.getElementById(
      "destination"
    ) as HTMLInputElement;
    const dateFlight = document.getElementById("dateFlight");
    const people = document.getElementById("people");
    const flight = document.getElementById("flight");
    const flightBoston = document.getElementById("flightBoston");
    const flightLondon = document.getElementById("flightLondon");
    const flightWarsaw = document.getElementById("flightWarsaw");
    const destinationValue: string = destination.value.toLowerCase();
    switch (destinationValue) {
      case "boston":
        flight.style.display = "block";
        flightBoston.style.display = "block";
        return;
      case "warsaw":
        flight.style.display = "block";
        flightWarsaw.style.display = "block";
        return;
      case "london":
        flight.style.display = "block";
        flightLondon.style.display = "block";
        return;
      default:
        return;
    }
  }
  complete() {
    const comSour = document.getElementById("comSour");
    const comDest = document.getElementById("comDest");
    const comDate = document.getElementById("comDate");
    const comBag = document.getElementById("comBag");
    const comSet = document.getElementById("comSet");
    const comPrice = document.getElementById("comPrice");
    const dest = document.querySelector("#destination") as HTMLInputElement;
    const dateFlight = document.querySelector(
      "#dateFlight"
    ) as HTMLInputElement;
    comDest.textContent = `Destination : ${dest.value}`;
    comDate.textContent = `Date : ${dateFlight.value}`;
  }
  // funkcja z book
  book(event: Event) {
    const flight = document.getElementById("flight");
    const flightBoston = document.getElementById("flightBoston");
    const flightLondon = document.getElementById("flightLondon");
    const flightWarsaw = document.getElementById("flightWarsaw");
    const flightBostonBooks = document.getElementById("flightBostonBooks");
    const flightLondonBooks = document.getElementById("flightLondonBooks");
    const flightWarsawBooks = document.getElementById("flightWarsawBooks");
    const destination = document.getElementById(
      "destination"
    ) as HTMLInputElement;
    const destinationValue: string = destination.value.toLowerCase();
    switch (destinationValue) {
      case "boston":
        flight.style.display = "none";
        flightBoston.style.display = "none";
        flightBostonBooks.style.display = "block";
        break;
      case "warsaw":
        flight.style.display = "none";
        flightWarsaw.style.display = "none";
        flightWarsawBooks.style.display = "block";
        break;
      case "london":
        flight.style.display = "none";
        flightLondon.style.display = "none";
        flightLondonBooks.style.display = "block";
        break;
      default:
        return;
    }
    const btnComplete = document.querySelectorAll(".btnComplete");
    // 
    btnComplete.forEach((element) => {
      return element.addEventListener("click", (e) => {
        flightBostonBooks.style.display = "none";
        flightLondonBooks.style.display = "none";
        flightWarsawBooks.style.display = "none";
        let container = e.target.closest(".bookFlight");
        const people = document.getElementById("people") as HTMLInputElement;
        let handLuggage = container.querySelector(
          "input[name=handLuggage]:checked"
        );
        let smallBug = container.querySelector("input[name=smallBug]:checked");
        let checkedInBag = container.querySelector(
          "input[name=checkedInBag]:checked"
        );
        let seat = container.querySelector("input[name=seat]");
        const comDest = document.getElementById("comDest");
        const comDate = document.getElementById("comDate");
        const comBag = document.getElementById("comBag");
        const comSet = document.getElementById("comSet");
        const comPrice = document.getElementById("comPrice");
        const dest = document.querySelector("#destination") as HTMLInputElement;
        const price =
          dest.value.toLowerCase() == "london"
            ? 100
            : dest.value.toLowerCase() == "boston"
              ? 1000
              : 50;
        const dateFlight = document.querySelector(
          "#dateFlight"
        ) as HTMLInputElement;
        comDest.textContent = `Destination : ${dest.value}`;
        comDate.textContent = `Date : ${dateFlight.value}`;
        comBag.textContent = `Bag  : ${handLuggage
            ? "handLuggage"
            : smallBug
              ? "small bag"
              : checkedInBag
                ? "Checked In bag"
                : ""
          }`;
        comSet.textContent = `Seat : ${seat.value}`;
        comPrice.innerHTML = `Price : ${price * people.value}  <select>
        <option>USD</option>
        <option>PLN</option>
        <option>EUR</option>
      </select>`;
        const complete = document.getElementById("complete");
        complete.style.display = "block";
        const finish = document.getElementById("finish");
        finish.addEventListener("click", () => {
          complete.style.display = "none";
          alert("Thank you. You have successfully Booked your Tickets");
        });
      });
    });
  }
  // uzupełnia dane z api do elementów html, 
  populateListElement(element: HTMLElement, weatherData: IWeatherData) {
    const parentId = element.id;
    const iconEl = document.querySelector(
      `#${parentId} #${parentId}_${LIST_ELEMTNS.icon}`
    ) as HTMLImageElement;
    iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    iconEl.alt = weatherData.weather[0].description;
    iconEl.title = weatherData.weather[0].description;
    document.querySelector(
      `#${parentId} #${parentId}_${LIST_ELEMTNS.name}`
    ).innerHTML = weatherData.name;
    let d = new Date(weatherData.dt * 1000);
    document.querySelector(
      `#${parentId} #${parentId}_${LIST_ELEMTNS.pressure}`
    ).innerHTML = `${d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear()
      } `;
    document.querySelector(
      `#${parentId} #${parentId}_${LIST_ELEMTNS.temp}`
    ).innerHTML = `${(weatherData.main.temp / 10).toFixed(1)}°C`;
    return element;
  }
  // tworzenie elementów html 
  renderWeatherElement(weatherData: IWeatherData, elementId: string) {
    const wrapper = document.getElementById("cityList");
    const element = document.createElement("div");
    element.className = "col-lg-4 col-md-4 col-sm-6";
    element.id = elementId;
    const elementBtn = document.createElement("button");
    const elementBtnContainer = document.createElement("div");
    const elementBtnContainerChild = document.createElement("div");
    elementBtnContainer.className =
      "img-thumbnail img-fluid thumb-div flip-card min";
    elementBtnContainerChild.style.display = "flex";
    elementBtnContainerChild.style.flexDirection = "column";
    const nameEl = document.createElement("p");
    nameEl.id = `${elementId}_${LIST_ELEMTNS.name}`;
    elementBtnContainerChild.appendChild(nameEl);
    const tempEl = document.createElement("span");
    tempEl.id = `${elementId}_${LIST_ELEMTNS.temp}`;
    elementBtnContainerChild.appendChild(tempEl);
    const pressEl = document.createElement("span");
    pressEl.id = `${elementId}_${LIST_ELEMTNS.pressure}`;
    elementBtnContainerChild.appendChild(pressEl);
    const iconEl = document.createElement("img");
    iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    iconEl.id = `${elementId}_${LIST_ELEMTNS.icon}`;

    elementBtnContainer.appendChild(elementBtnContainerChild);
    elementBtnContainer.appendChild(iconEl);
    elementBtn.appendChild(elementBtnContainer);
    element.appendChild(elementBtn);
    wrapper.appendChild(element);

    this.populateListElement(element, weatherData);
  }
  // wyrenderuj z otrzymanych danych, boxy z pogodą, linia 226 tworzenie zmiennej z elementem, potem if w 228, jeśli nie istnieje to wykonaj funckcje 229. Ta fukcja odpala się jako pierwsza, 
  renderWeatherList(weatherData: IWeatherData[], force: boolean = false) {
    if (force) {
      const wrapper = document.getElementById("cityList");
      wrapper.innerHTML = null;
    }
    weatherData.forEach((data) => {
      const elementId = `listEl_${data.id}`;
      const element = document.getElementById(elementId) as HTMLElement;
      if (element) this.populateListElement(element, data);
      else this.renderWeatherElement(data, elementId);
    });
  }
}
