/// Projet 2

////Récupération des datas avec fetch

const url = 'https://canvasjs.com/services/data/datapoints.php';


async function recupererData() {

    const requete = await fetch(url, {
      method: 'GET',
      cache : 'reload'
    });
    
    if(!requete.ok) {
      alert('Un problème est survenu.');
    } else {
        let donneesRecuperees = await requete.json();
        // on intègre le graph ici pour récupérer les datas
        /// placement du graph
        var graph3 = document.createElement("canvas");
        graph3.setAttribute("id", "ajaxTable");
        document.querySelector('#firstHeading').prepend(graph3);

        console.log (donneesRecuperees)

      var x = [];
      var y = [];
      for (i=0;i<donneesRecuperees.length;i++)
      {
        x.push(donneesRecuperees[i][0])
        y.push(donneesRecuperees[i][1])
      }


        var datasets3 = [{
                data: y
        }];



        /// creation du graph
        const data3 = {
            labels: x,
            datasets: datasets3,
        }

        var exo3 = new Chart (graph3,
        //const config = { ici on configure le tableau
            {
                type:'line',
                data: data3,
            })
    }
}


// setInterval(UpdateData,1000);
recupererData();