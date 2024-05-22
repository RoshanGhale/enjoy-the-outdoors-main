"use strict";

window.onload = function () {
  const mountainTB = document.querySelector("#mountainTB");
  const mountainList = document.querySelector("#mountainList");

  function loadMountains() {
    for (const mountain of mountainsArray) {
      buildTableRow(mountain);
    }
  }
  function buildMountainOption() {
    for (const mountain of mountainsArray) {
      const mountainOption = document.createElement("option");
      mountainOption.value = mountain.name;
      mountainOption.innerText = mountain.name;
      mountainList.appendChild(mountainOption);
    }
  }
  function buildTableRow(mountain) {
    if (mountain.name == mountainList.value) {
      let row = mountainTB.insertRow();

      let cell1 = row.insertCell();
      cell1.innerText = mountain.name;

      let cell2 = row.insertCell();
      cell2.innerText = mountain.elevation;

      let cell3 = row.insertCell();
      cell3.innerText = mountain.effort;

      let cell4 = row.insertCell();
      cell4.innerText = mountain.desc;
    }
  }

  mountainList.onchange = loadMountains;
  loadMountains();
  buildMountainOption();
};
