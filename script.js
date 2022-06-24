/// 1.1 Graph one display
// Canvas set up
function creationCanvas() {
  var canvas1 = document.createElement("canvas");
  canvas1.setAttribute("id", "crimesTable");
  document.querySelector("h3").prepend(canvas1);

  //////////////////////// TABLEAU 1 ///////////////////////////////
  //// 1.  Take the datas
  var years = [];
  var years2 = ["2007-09", "2010-12"];
  var countries_1 = [];
  var countries_2 = [];
  var datas = [];

  //take the years
  var table1 = document.getElementById("table1");
  var table2 = document.getElementById("table2");
  var AllThTable1 = table1.querySelectorAll("th");
  for (i = 0; i < AllThTable1.length; i++) {
    if (!isNaN(AllThTable1[i].innerHTML)) {
      years[i] = AllThTable1[i].innerHTML;
    }
  }
  years.splice(0, 5);

  //creation d'une fonction hasNumber
  function hasNumber(number) {
    return /\d/.test(number);
  }

  ////take the countries & the datas
  var AllTdTable1 = table1.querySelectorAll("td");
  var AllTdTable2 = table2.querySelectorAll("td");

  // function to get the countries on array
  function getCountries(arr, arrCountries) {
    arr.forEach((e) => {
      if (!hasNumber(e.innerHTML)) {
        arrCountries.push(e.innerHTML);
      }
    });
    arrCountries = arrCountries.filter((pays) => pays !== ":");
  }

  getCountries(AllTdTable1, countries_1);

  // DATAS
  AllTdTable1.forEach((e) => {
    if (hasNumber(e.innerHTML) || e.innerHTML == ":") {
      parseInt(e.innerHTML);
      datas.push(e.innerHTML);
    }
  });

  /// transformation les datas en INT
  for (i = 0; i < datas.length; i++) {
    datas[i] = parseInt(datas[i]);
  }
  /// découpe les datas en tableau pour chaque pays
  var tableauParPaysDesDonnees = [];
  const nbrDeDonneesParPays = 11;
  for (i = 0; i < datas.length; i += nbrDeDonneesParPays) {
    tableauParPaysDesDonnees[i] = datas.slice(i, i + nbrDeDonneesParPays);
  }
  tableauParPaysDesDonnees = tableauParPaysDesDonnees.filter(
    (elt) => elt !== undefined
  );

  /// 2.Création du tableau

  // 2.a récuperation datas par fonction
  function changeColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //// CONSTRUCTOR TO OBTAIN ONE OBJECT PER COUNTRY
  function donneesPays(label, data, borderColor, backgroundColor) {
    this.label = label;
    this.data = data;
    this.borderColor = borderColor;
    this.backgroundColor = backgroundColor;
  }

  var datasets = [];
  for (i = 0; i < countries_1.length; i++) {
    datasets[i] = new donneesPays(
      countries_1[i],
      tableauParPaysDesDonnees[i],
      changeColor()
    );
  }

  const data = {
    labels: years,
    datasets: datasets,
  };

  var chart1 = new Chart(canvas1, {
    type: "line",
    data: data,
  });

  //////////////////////// TABLEAU 2 ///////////////////////////////
  var canvas2 = document.createElement("canvas");
  canvas2.setAttribute("id", "PrisonPopulation");
  document.querySelector("#Homicides").prepend(canvas2);

  ///////////countries_2
  getCountries(AllTdTable2, countries_2);

  // datas2
  var datas2 = [];
  AllTdTable2.forEach((e) => {
    if (hasNumber(e.innerHTML) || e.innerHTML == ":") {
      parseInt(e.innerHTML);
      datas2.push(e.innerHTML);
    }
  });

  for (i = 0; i < datas2.length; i++) {
    datas2[i] = parseInt(datas2[i]);
  }

  /// découpe les datas en tableau pour chaque pays
  var tableauParPaysDesDonnees2 = [];
  const nbrDeDonneesParPays2 = 2;
  for (i = 0; i < datas2.length; i += nbrDeDonneesParPays2) {
    tableauParPaysDesDonnees2[i] = datas2.slice(i, i + nbrDeDonneesParPays2);
  }
  tableauParPaysDesDonnees2 = tableauParPaysDesDonnees2.filter(
    (elt) => elt !== undefined
  );

  var datasets2 = [];
  for (i = 0; i < countries_2.length; i++) {
    datasets2[i] = new donneesPays(
      countries_2[i],
      tableauParPaysDesDonnees2[i],
      changeColor(),
      changeColor()
    );
  }

  const data2 = {
    labels: years2,
    datasets: datasets2,
  };

  var test2 = new Chart(canvas2, {
    type: "bar",
    data: data2,
  });
}
creationCanvas();



/// DISPLAY OF THE GRAPHIC WITHOUT DATAS
var graph3 = document.createElement("canvas");
graph3.setAttribute("id", "ajaxTable");
document.querySelector("#firstHeading").prepend(graph3);

var x = [];
var y = []
let data3 = {
  labels: x,
  datasets: [{  data: y,
                label: null,
                borderColor : 'red',
                backgroundColor : 'red' 
            }],
};

var exo3 = new Chart(graph3, {
  type: "line",
  data: data3,
  options: {
    scales: {
        y: {
          min: -10,
          max: 30,
        }
      },
    plugins: {
        legend: {
          display: false}
}}});

/// UPDATE THE GRAPH WITH FETCH DATAS AS VARIABLE
function update(donneesRecuperees) {
  for (i = 0; i < donneesRecuperees.length; i++) {
    x[i]=donneesRecuperees[i][0];
    y[i] = donneesRecuperees[i][1];
  }

  function addData(chart, labels, dataY, datasetIndex) {
    chart.data.datasets[datasetIndex].data = dataY;
    chart.data.labels = labels;
    chart.update();
  }

  addData(exo3, x, y, 0);
}


/// ASYNC FUNCTION TO GET URL DATAS and CALL THE UPDATE FUNCTION
async function fetchMethod() {
  const url = "https://canvasjs.com/services/data/datapoints.php";
  const requete = await fetch(url, {
    method: "GET",
    cache: "reload",
  });

  if (!requete.ok) {
    alert("Un problème est survenu.");
  } else {
    let donneesRecuperees = await requete.json();
    update(donneesRecuperees);
  }
}

setInterval(fetchMethod, 1000);

