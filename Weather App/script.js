//http://api.weatherapi.com/v1/current.json?key=fca229380f354648818185507242312&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

let target = "Mumbai";

const fetchResults = async (targetLocation) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=fca229380f354648818185507242312&q=Mumbai&aqi=no`;

  const res = await fetch(url);

  const data = await res.json();

  console.log(data);

  let locationName = data.location.name;
  let time = data.location.localtime;

  let temp = data.current.temp_c;

  let condition = data.current.condition.text;

  updateDetails(temp, locationName, time, condition);
};

function updateDetails(temp, localtime, time, condition) {
  temperatureField.innerText = temp;
  locationField.innerText = locationName;
  dateandTimeField.innerText = time;
  conditionField.innerText = condition;
}

function searchForLocation(e) {
  e.preventDefault();

  target = searchField.value;

  fetchResults(target);
}

fetchResults(target);
