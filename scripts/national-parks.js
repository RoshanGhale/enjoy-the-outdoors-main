"use strict";
window.onload = function () {
  const radioButtonForm = document.querySelector("#radioButtonForm");
  const locationOption = document.querySelector("#locationOption");
  const parkOption = document.querySelector("#parkOption");
  const statesList = document.querySelector("#statesList");

  const locationTB = document.querySelector("#locationTB");
  const parkList = document.querySelector("#parkList");
  const parkTB = document.querySelector("#parkTB");

  function buildParkOption() {
    for (const location of locationsArray) {
      const option = document.createElement("option");
      option.value = location;
      option.innerText = location;
      statesList.appendChild(option);
    }
  }

  function buildTableRow() {
    locationTB.innerHTML = "";
    for (const park of nationalParksArray) {
      if (park.State == statesList.value) {
        let row = locationTB.insertRow();

        let cell1 = row.insertCell();
        cell1.innerText = park.LocationID;

        let cell2 = row.insertCell();
        cell2.innerText = park.LocationName;

        let cell3 = row.insertCell();
        cell3.innerText = park.Address;

        let cell4 = row.insertCell();
        cell4.innerText = park.City;

        let cell5 = row.insertCell();
        cell5.innerText = park.State;

        let cell6 = row.insertCell();
        cell6.innerText = park.ZipCode;

        let cell7 = row.insertCell();
        cell7.innerText = park.Phone;

        let cell8 = row.insertCell();
        cell8.innerText = park.Fax;

        let cell9 = row.insertCell();

        if (park.Visit) {
          console.log(park.Visit);
          let link = document.createElement("a");
          link.href = park.Visit;
          link.textContent = "Visit Website";
          link.target = "_blank";
          cell9.appendChild(link);
        }
        let cell10 = row.insertCell();
        cell10.innerText = park.Latitude;

        let cell11 = row.insertCell();
        cell11.innerText = park.Longitude;

        let cell12 = row.insertCell();
        cell12.innerText = park.Location.coordinates;
      }
    }
  }
  function buildParkType() {
    for (const parkType of parkTypesArray) {
      const parkOption = document.createElement("option");
      parkOption.value = parkType;
      parkOption.innerText = parkType;
      parkList.appendChild(parkOption);
    }
  }

  function buildTypeRow() {
    parkTB.innerHTML = "";
    for (const park of nationalParksArray) {
      if (park.LocationName.indexOf(parkList.value) !== -1) {
        let row = parkTB.insertRow();
        let cell1 = row.insertCell();
        cell1.innerText = park.LocationID;

        let cell2 = row.insertCell();
        cell2.innerText = park.LocationName;

        let cell3 = row.insertCell();
        cell3.innerText = park.Address;

        let cell4 = row.insertCell();
        cell4.innerText = park.City;

        let cell5 = row.insertCell();
        cell5.innerText = park.State;

        let cell6 = row.insertCell();
        cell6.innerText = park.ZipCode;

        let cell7 = row.insertCell();
        cell7.innerText = park.Phone;

        let cell8 = row.insertCell();
        cell8.innerText = park.Fax;

        let cell9 = row.insertCell();
        if (park.Visit) {
          console.log(park.Visit);
          let link = document.createElement("a");
          link.href = park.Visit;
          link.textContent = "Visit Website";
          link.target = "_blank";
          cell9.appendChild(link);
        }
        let cell10 = row.insertCell();
        cell10.innerText = park.Latitude;

        let cell11 = row.insertCell();
        cell11.innerText = park.Longitude;

        let cell12 = row.insertCell();
        cell12.innerText = park.Location.coordinates;
      }
    }
  }

  function searchTypeChanged() {
    if (locationOption.checked) {
      selectStateDiv.style.display = "block";
    } else {
      selectStateDiv.style.display = "none";
    }
    if (parkOption.checked) {
      parkTypeDiv.style.display = "block";
    } else {
      parkTypeDiv.style.display = "none";
    }
  }

  statesList.onchange = buildTableRow;
  buildParkOption();
  parkList.onchange = buildTypeRow;
  buildParkType();
  locationOption.onchange = searchTypeChanged;
  parkOption.onchange = searchTypeChanged;
  searchTypeChanged();
};
