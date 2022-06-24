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
    plugins: {
        legend: {
          display: false}
}}});

/// UPDATE THE GRAPH WITH FETCH DATAS AS VARIABLE
function update(donneesRecuperees) {
  for (i = 0; i < donneesRecuperees.length; i++) {
    x.push(donneesRecuperees[i][0]);
    y.push(donneesRecuperees[i][1]);
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
