/// Projet 2

////Récupération des datas avec fetch

const url = 'https://canvasjs.com/services/data/datapoints.php';

async function recupererData() {

    const requete = await fetch(url, {
      method: 'GET'
    });
    
    if(!requete.ok) {
      alert('Un problème est survenu.');
    } else {
      let donneesRecuperees = await requete.json();
      console.log (donneesRecuperees);
    }
 


/// placement du graph
var graph3 = document.createElement("canvas");
graph3.setAttribute("id", "ajaxTable");
document.querySelector('#firstHeading').prepend(graph3);


var datasets3 = [{
        data: [8,24,3],
}];



/// creation du graph
const data3 = {
    labels: ["x","y","z"],
    datasets: datasets3,
}

var exo3 = new Chart (graph3,
//const config = { ici on configure le tableau
    {
        type:'bar',
        data: data3,
    })


}

   recupererData();
   