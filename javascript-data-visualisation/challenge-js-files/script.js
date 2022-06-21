/// 1.1 Graph one display

// Canvas set up 
function creationCanvas (){
var canvas1 = document.createElement("canvas");
canvas1.setAttribute("id", "crimesTable");
document.querySelector('h3').prepend(canvas1);
// document.body.insertBefore(canvas1, document.querySelector('#table1'))


// Tableau
//// 1.  Take the datas
var years = [];
var countries = [];
var datas = [];

//take the years (OK)
var table1 = document.getElementById ('table1');
var AllThTable1 = table1.querySelectorAll('th');
var years = [];
for (i=0; i<AllThTable1.length;i++)
{
    if (!isNaN(AllThTable1[i].innerHTML))
    {
        years[i] = AllThTable1[i].innerHTML;
    } 
}
years.splice(0,5);

//creation d'une fonction hasNumber
function hasNumber (number)
{
    return /\d/.test(number);
}

////take the countries & the datas
var AllTdTable1 = table1.querySelectorAll('td');
// countries
AllTdTable1.forEach(e=>{if(!hasNumber(e.innerHTML)){
    countries.push (e.innerHTML);
}});
countries = countries.filter(pays=>pays!==":")
// datas
AllTdTable1.forEach(e=>{if(hasNumber(e.innerHTML)|| e.innerHTML==":"){
    parseInt(e.innerHTML);
    datas.push (e.innerHTML);
}});
/// transformation les datas en INT
for (i=0;i<datas.length;i++)
{
    datas[i] = parseInt(datas[i]);
}
/// découpe les datas en tableau pour chaque pays
var tableauParPaysDesDonnees = [];
const nbrDeDonneesParPays = 11;
for (i=0;i<datas.length;i+=nbrDeDonneesParPays){
    tableauParPaysDesDonnees[i] = datas.slice(i,i+nbrDeDonneesParPays)
}
tableauParPaysDesDonnees = tableauParPaysDesDonnees.filter(elt=>elt !== undefined);






/////////////////////////////////////////////////////////////////////////////////

// 2.Création du tableau

// 2.a récuperation datas par fonction
function changeColor () 
    {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

function donneesPays (label, data, borderColor)
{
    this.label = label;
    this.data = data;
    this.borderColor = borderColor;
}

var datasets=[];
for (i=0;i<countries.length;i++)
{
 datasets[i] = new donneesPays (countries[i],tableauParPaysDesDonnees[i],changeColor());
}




const data = {
    labels: years,
    datasets: datasets,
}





// exemple de tableau Chart.js
var test = new Chart (canvas1,
//const config = { ici on configure le tableau
    {
        type: "line",
        data: data,
    })
}


creationCanvas ();



// const DATA_COUNT = 11;
// const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
// var countries = document.querySelectorAll('td');
// console.log (countries);

// const labels = Utils.years({count: 11});
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'My First dataset',
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.red,
//       backgroundColor: Utils.CHART_COLORS.red,
//       fill: true
//     },
//     {
//       label: 'My Second dataset',
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.blue,
//       backgroundColor: Utils.CHART_COLORS.blue,
//       fill: true
//     },
//     {
//       label: 'My Third dataset',
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.green,
//       backgroundColor: Utils.CHART_COLORS.green,
//       fill: true
//     },
//     {
//       label: 'My Fourth dataset',
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.yellow,
//       backgroundColor: Utils.CHART_COLORS.yellow,
//       fill: true
//     }
//   ]
// };


///   2. config
// const config = {
//     type: 'line',
//     data: data,
//     options: {
//       responsive: true,
//       plugins: {
//         title: {
//           display: true,
//           text: (ctx) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
//         },
//         tooltip: {
//           mode: 'index'
//         },
//       },
//       interaction: {
//         mode: 'nearest',
//         axis: 'x',
//         intersect: false
//       },
//       scales: {
//         x: {
//           title: {
//             display: true,
//             text: 'Years'
//           }
//         },
//         y: {
//           stacked: true,
//           title: {
//             display: true,
//             text: 'Value'
//           }
//         }
//       }
//     }
//   };
























/// Projet 2
// const url = 'https://canvasjs.com/services/data/datapoints.php';

// async function recupererData() {

//     const requete = await fetch(url, {
//       method: 'GET'
//     });
    
//     if(!requete.ok) {
//       alert('Un problème est survenu.');
//     } else {
//       let donnees = await requete.json();
//       console.log(donnees);
//       document.document.getElementById('firstHeading').textContent = donnees.last;
//     }
//   }
  
//    recupererData();