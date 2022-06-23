const url = "https://canvasjs.com/services/data/datapoints.php";

async function fetchMethod() {
  const requete = await fetch(url, {
    method: "GET",
    cache: "reload",
  });

  if (!requete.ok) {
    alert("Un problème est survenu.");
  } else {
    let donneesRecuperees = await requete.json();
    var graph3 = document.createElement("canvas");
    graph3.setAttribute("id", "ajaxTable");
    document.querySelector("#firstHeading").prepend(graph3);

    var x = [];
    var y = [];
    for (i = 0; i < donneesRecuperees.length; i++) {
      x.push(donneesRecuperees[i][0]);
      y.push(donneesRecuperees[i][1]);
    }

    let data3 = {
      labels: x,
      datasets: [{ data: y }],
    };

    var exo3 = new Chart(
      graph3,
      {
        type: "line",
        data: data3,
      }
    );
  }




  function addData(chart, data, datasetIndex) {
    chart.data.datasets[datasetIndex].data = data;
    chart.update();
  }

  setInterval(function () {
    addData(exo3,x, 0);
  }, 1000);
}

fetchMethod();

function update (donnees)
{
  console.log (donnees)
}



// function refresh() {
//   $.ajax({
//       url: 'https://canvasjs.com/services/data/datapoints.php', // Ton fichier ou se trouve ta data
//       success:
//           function recupererData(){}
//   });
//   }

//   function addData(chart, data, datasetIndex) {
//         chart.data.datasets[datasetIndex].data = data;
//         console.log (y)
//         chart.update();
// }

// setInterval(function(){
//   addData(exo3,y,0)
// },1000);
// setInterval();


