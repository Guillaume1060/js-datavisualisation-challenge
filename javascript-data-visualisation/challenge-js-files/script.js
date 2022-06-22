
/// Projet 2
const url = 'https://canvasjs.com/services/data/datapoints.php';

async function recupererData() {

    const requete = await fetch(url, {
      method: 'GET'
    });
    
    if(!requete.ok) {
      alert('Un problème est survenu.');
    } else {
      let donnees = await requete.json();
      console.log(donnees);
      document.document.getElementById('firstHeading').textContent = donnees.last;
    }
  }
  
   recupererData();

   /// placemdent du graph
    var graph3 = document.createElement("canvas");
    graph3.setAttribute("id", "ajaxTable");
    document.querySelector('#firstHeading').prepend(graph3);



    /// creation du graph
    const data = {
        labels: years,
        datasets: datasets,
    }

    var test = new Chart (canvas1,
    //const config = { ici on configure le tableau
        {
            type:'line',
            data: data,
        })