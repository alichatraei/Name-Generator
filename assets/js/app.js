//Class
class GenerateName {
  constructor(country, sex) {
    (this.country = country), (this.sex = sex);
  }
  connectToAPI() {
    //  create base url
    let url = "https://en.namefake.com/";
    //get country & sex
    url += this.country + "/";
    url += this.sex;
    //create XML Http Request
    let xml = new XMLHttpRequest();
    // open xml Http Request
    xml.open("GET", url, true);
    // show response
    xml.onload = function () {
      if (this.status === 200) console.log(xml.responseText());
    };
    // send Request
    xml.send();
  }
}

//variables
let country = document.querySelector("#country"),
  sex = document.querySelector("#sex");

//event Listeners
eventListeners();
function eventListeners() {
  // when load page disable sex select box
  document.addEventListener("DOMContentLoaded", () => {
    sex.disabled = true;
  });
  // when select value of country select box active sex select box
  country.addEventListener("change", () => {
    sex.disabled = false;
  });
  sex.addEventListener("change", () => {
    let generateName = new GenerateName(country.value, sex.value);
    generateName.connectToAPI();
  });
}
