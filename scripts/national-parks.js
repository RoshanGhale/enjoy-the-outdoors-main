"use strict";
window.onload = function () {
  const nationalParkTB = document.querySelector("#nationalParkTB");
  const parkList = document.querySelector("#parkList");

  function loadParks() {
    for (const park of nationalParksArray) {
      buildTableRow(park);
    }
  }

  function buildParkOption() {
    for (const location of locationsArray) {
      const parkOption = document.createElement("option");
      parkOption.value = location;
      parkOption.innerText = location;
      parkList.appendChild(parkOption);
    }
  }

  function buildTableRow(park) {
    if (park.State == parkList.value) {
      let row = nationalParkTB.insertRow();

      let cell1 = row.insertCell();
      cell1.innerText = park.LocationName;

      let cell2 = row.insertCell();
      cell2.innerText = park.Address;

      let cell3 = row.insertCell();
      cell3.innerText = park.City;

      let cell4 = row.insertCell();
      cell4.innerText = park.State;

      let cell5 = row.insertCell();
      cell5.innerText = park.ZipCode;

      let cell6 = row.insertCell();
      cell6.innerText = park.Phone;

      let cell7 = row.insertCell();
      cell7.innerText = park.Fax;

      let cell8 = row.insertCell();
      cell8.innerText = park.Visit;
    }
  }
  parkList.onchange = buildTableRow;
  loadParks();
  buildTableRow();
};
