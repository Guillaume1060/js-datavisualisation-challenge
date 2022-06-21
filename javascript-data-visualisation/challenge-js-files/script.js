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
console.log (years)

//creation d'une fonction hasNumber
function hasNumber (number)
{
    return /\d/.test(number);
}

////take the countries & the datas
var AllTdTable1 = table1.querySelectorAll('td');
// datas
AllTdTable1.forEach(e=>{if(hasNumber(e.innerHTML)|| e.innerHTML==":"){
    parseInt(e.innerHTML);
    datas.push (e.innerHTML);
}});
// countries
AllTdTable1.forEach(e=>{if(!hasNumber(e.innerHTML)){
    countries.push (e.innerHTML);
}});
countries = countries.filter(pays=>pays!==":")

/// transformation des datas en INT
for (i=0;i<datas.length;i++)
{
    datas[i] = parseInt(datas[i]);
}


console.log (datas);
console.log (countries);
console.log (countries[0]);
console.log (datas);
console.log (typeof(datas[0]))
datas[0] = parseInt(datas[0])
console.log (datas[0]);
console.log (datas[5]);
console.log (typeof(datas[0]))


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

var dataPerCountries=[];
for (i=0;i<countries.length;i++)
{
 dataPerCountries[i] = new donneesPays (countries[i],[datas[i]],'red');
}

console.log (dataPerCountries);
console.log (dataPerCountries[25]);




const data = {
    labels: years,
    datasets: [
    { 
        label: countries[0],
        data: [datas[0],datas[1],datas[2],datas[3],datas[4],datas[5],datas[6],datas[7],datas[8],datas[9],datas[10]]
    },
    { 
        label: countries[1],
        data: [datas[11],datas[12],datas[13],datas[14],datas[15],datas[16],datas[17],datas[18],datas[19],datas[20],datas[21]],
        backgroundColor : 'blue',
    }
]}





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