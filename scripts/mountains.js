"use strict";

window.onload = function () {
  const mountainTB = document.querySelector("#mountainTB");
  const mountainList = document.querySelector("#mountainList");

  function loadMountains() {
    mountainTB.innerText = "";
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

      let cell5 = row.insertCell();
      const img = document.createElement("img");

      img.src = mountain.img;
      img.alt = mountain.name;
      cell5.appendChild(img);

      /*   
      img.classList.add("custom-img");
      img.src = mountain.img;
      img.alt = mountain.name;
      img.width = 200;
      cell4.appendChild(img); */
    }
  }

  mountainList.onchange = loadMountains;
  loadMountains();
  buildMountainOption();
};
