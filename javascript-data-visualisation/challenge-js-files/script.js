/// 1.1 Graph one display
// Canvas set up 
function creationCanvas (){
var canvas1 = document.createElement("canvas");
canvas1.setAttribute("id", "crimesTable");
document.querySelector('h3').prepend(canvas1);
// document.body.insertBefore(canvas1, document.querySelector('#table1'))

// Tableau 1//
//// 1.  Take the datas
var years = [];
var countries_1 = [];
var countries_2 = [];
var datas = [];

//take the years (OK)
var table1 = document.getElementById ('table1');
var table2 = document.getElementById ('table2');
var AllThTable1 = table1.querySelectorAll('th');
var AllThTable2 = table2.querySelectorAll('th');
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

////take the countries_1 & the datas
var AllTdTable1 = table1.querySelectorAll('td');
var AllTdTable2 = table2.querySelectorAll('td');


// countries_1
function getCountries (arr,arrCountries){
arr.forEach(e=>{if(!hasNumber(e.innerHTML)){
arrCountries.push (e.innerHTML);}});
arrCountries = arrCountries.filter(pays=>pays!==":")}

getCountries (AllTdTable1,countries_1);
/// le filtre ci dessous ne fonctionne pas dans ma fonction -> a revoir
countries_1 = countries_1.filter(pays=>pays!==":")


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

function donneesPays (label, data,borderColor,backgroundColor,)
{
    this.label = label;
    this.data = data;
    this.borderColor = borderColor;
    this.backgroundColor = backgroundColor;
}

var datasets=[];
for (i=0;i<countries_1.length;i++)
{
 datasets[i] = new donneesPays (countries_1[i],tableauParPaysDesDonnees[i],changeColor());
}
console.log (datasets);

var years2 = ['2007-09','2010-12'];
console.log (years2);

const data = {
    labels: years,
    datasets: datasets,
}

// exemple de tableau Chart.js
var test = new Chart (canvas1,
//const config = { ici on configure le tableau
    {
        type:'line',
        data: data,
    })

//////////////////////// TABLEAU 2 ///////////////////////////////
    var canvas2 = document.createElement("canvas");
    canvas2.setAttribute("id", "PrisonPopulation");
    document.querySelector('#Homicides').prepend(canvas2);


///////////countries_2
    getCountries (AllTdTable2,countries_2);

// datas2
var datas2 = [];
AllTdTable2.forEach(e=>{if(hasNumber(e.innerHTML)|| e.innerHTML==":"){
    parseInt(e.innerHTML);
    datas2.push (e.innerHTML);
}});

for (i=0;i<datas2.length;i++)
{
    datas2[i] = parseInt(datas2[i]);
}


/// découpe les datas en tableau pour chaque pays
var tableauParPaysDesDonnees2 = [];
const nbrDeDonneesParPays2 = 2;
for (i=0;i<datas2.length;i+=nbrDeDonneesParPays2){
    tableauParPaysDesDonnees2[i] = datas2.slice(i,i+nbrDeDonneesParPays2)
}
console.log (tableauParPaysDesDonnees2)
tableauParPaysDesDonnees2 = tableauParPaysDesDonnees2.filter(elt=>elt !== undefined);


var datasets2=[];
for (i=0;i<countries_2.length;i++)
{
 datasets2[i] = new donneesPays (countries_2[i],tableauParPaysDesDonnees2[i],changeColor(),changeColor());
}
console.log (datasets2);



const data2 = {
    labels: years2,
    datasets: datasets2,
}

// chart.jd tableau2
var test2 = new Chart (canvas2,
    {
        type:'bar',
        data: data2,
    })

}


creationCanvas ();


// TABLEAU 2 //
/// 2.1 Graph one display

// // Canvas set up 
// function creationCanvas_2 (){
//     var canvas2 = document.createElement("canvas2");
//     canvas2.setAttribute("id", "PrisonPopulation");
//     document.querySelector('h4').prepend(canvas2);


// // countries
// var AllTdTable2 = table2.querySelectorAll('td');
// var countries_2 = [];
//     function getCountries (arr,arrCountries){
//         arr.forEach(e=>{if(!hasNumber(e.innerHTML)){
//         arrCountries.push (e.innerHTML);}});
//         arrCountries = arrCountries.filter(pays=>pays!==":")}
        
//     getCountries (AllTdTable2,countries_2);

//     console.log (countries_2);
//     console.log (countries_2);

// }
//     // document.body.insertBefore(canvas1, document.querySelector('#table1'))


// creationCanvas_2();

// countries_2
//
//




// const DATA_COUNT = 11;
// const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
// var countries_1 = document.querySelectorAll('td');
// console.log (countries_1);

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