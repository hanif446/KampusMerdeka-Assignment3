const myInput = document.getElementById("inputSearch");
const myButton = document.getElementById("btnSearch");

myButton.addEventListener("click", function() {
  const inputCountry = myInput.value;

  fetch(`https://covid-193.p.rapidapi.com/statistics?country=${inputCountry}`, {
    "method": "GET",
    "headers": {
     	'X-RapidAPI-Key': 'ab24689a95msh4d4f251bcd162a1p1822b7jsn50dbbc7e9a69',
    	'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  })
  .then(response => response.json())
  .then(data => {
    const statistics = data.response[0];

    document.getElementById("activeCase").innerHTML = statistics.cases.active;
    document.getElementById("newCase").innerHTML = statistics.cases.new;
    document.getElementById("recoveredCase").innerHTML = statistics.cases.recovered;
    document.getElementById("totalCase").innerHTML = statistics.cases.total;
    document.getElementById("totalDeath").innerHTML = statistics.deaths.total;
    document.getElementById("totalTest").innerHTML = statistics.tests.total;
  })
  .catch(err => {
    console.error(err);
    alert("Error!");
  });
});

