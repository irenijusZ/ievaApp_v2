
// ===========Dropdown option==============
var dropOption1 = [
  {
    value:'EmoFreq2',
    isSelected : true
  },
  {
    value:'Energy2',
    isSelected : false
  },
  {
    value:'Travel2',
    isSelected : false

  },
  {
    value:'Being Sick2',
    isSelected : false
  },
]

var dropOption2 = [
  {
    value:'EmoFreq2',
    isSelected : false
  },
  {
    value:'Energy2',
    isSelected : true
  },
  {
    value:'Travel2',isSelected : false
  },
  {
    value:'Being Sick2',isSelected : false
  },
]



var drop1 = document.getElementById('dropDown1');
var drop2 = document.getElementById('dropDown2');



// for fisrt dropdown
// var fDown = [...dropOption];
// var sDown = [...dropOption];
// fDown[0].isSelected = true


function firstDrowdown(arr,id){
  arr.forEach(function(element,key) {
    id[key] = new Option(element.value,element.value,element.isSelected,element.isSelected);
  });
}

// firstDrowdown(dropOption1,drop1)
// firstDrowdown(dropOption2,drop2)
// second dropdown
//  fDown.filter(e=> e.isSelected ==false)

 var selectFirstDropValue = 'EmoFreq2'
 var selectSecondDropValue = 'Energy2'

 function dropdown1ValueSet(val){



   if (val !== '') {
    selectFirstDropValue = val;
   }else{
    selectFirstDropValue = 'EmoFreq2'
   }

  //  console.log(dropOption1[dropOption1.findIndex(r=>r.value == selectFirstDropValue)]);
  dropOption1.forEach(e=>e.isSelected = false)
  dropOption1[dropOption1.findIndex(r=>r.value == selectFirstDropValue)].isSelected = true

  var indexSec =  dropOption1.filter(e=>e.value !== selectSecondDropValue)
  firstDrowdown(indexSec,drop1)

  var indexfec =  dropOption2.filter(e=> e.value !== selectFirstDropValue)
  firstDrowdown(indexfec,drop2)
  // dropdown2ValueSet('');
 }

 function dropdown2ValueSet(val){

  if (val !== '') {
    selectSecondDropValue = val;
   }else{
    selectSecondDropValue = 'Energy2'
   }

   dropOption2.forEach(e=>e.isSelected = false)
   dropOption2[dropOption2.findIndex(r=>r.value == selectSecondDropValue)].isSelected = true

  var indexfec =  dropOption2.filter(e=> e.value !== selectFirstDropValue)
  firstDrowdown(indexfec,drop2)

  var indexSec =  dropOption1.filter(e=>e.value !== selectSecondDropValue)
  firstDrowdown(indexSec,drop1)
  // dropdown1ValueSet(val);
 }








// Chart1 data

var config = {
  type: "bar",
  data: {
    labels: [
      "1 Jun",
      "2 Jun",
      "3 Jun",
      "4 Jun",
      "5 Jun",
      "6 Jun",
      "7 Jun",
      "8 Jun",
      "9 Jun",
      "10 Jun",
      "11 Jun",
      "12 Jun",
      "13 Jun",
      "14 Jun",
      "15 Jun",
      "16 Jun",
      "17 Jun",
      "18 Jun",
      "19 Jun",
      "20 Jun",
      "21 Jun",
      "22 Jun",
      "23 Jun",
      "24 Jun",
      "25 Jun",
      "26 Jun",
      "27 Jun",
      "28 Jun",
      "29 Jun",
      "30 Jun",
    ],
    datasets: [
      {
        type: "line",
        label: "EmoFreq",
        backgroundColor: "hsl(305, 82%, 48%)",
        borderColor: "hsl(305, 82%, 48%)",
        data: [

          600, 360, 360, 360, 210, 120, 550, 550, 180, 550, 120, 220, 360, 180, 210, 120, 220, 478, 360, 565, 600, 450, 360, 550, 210, 550, 450, 360, 450, 210, 450, 220, 360, 180, 210,
        ],

        fill: false,
      },
      {
        type: "line",
        label: "Energy",
        backgroundColor: "hsl(229, 80%, 71%)",
        borderColor: "hsl(229, 80%, 71%)",
        data: [

          10, 2, 3, 6, 8, 4, 9, 10, 10, 6, 6, 7, 8, 7, 6, 8, 10, 10, 7, 7, 10, 6, 6, 10, 9, 10, 9, 7, 6, 4, 9, 10, 7, 7, 6,
        ],
        yAxisID: "y1",
        fill: false,
      },
      {
        type: "bar",
        label: "Travel",
        backgroundColor: "hsl(234, 54%, 93%)",
        borderColor: "hsl(234, 54%, 93%)",
        data: [
          10, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        ],
        yAxisID: "y1",
        fill: false,
        hidden: true,
      },
      {
        type: "bar",
        label: "Being Sick",
        backgroundColor: "hsl(306, 76%, 87%)",
        borderColor: "hsl(306, 76%, 87%)",
        data: [
          10, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 0, 0,
        ],
        yAxisID: "y1",
        fill: false,
        hidden: true,
      },
    ],
  },
  options: {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    animation: {
      numbers: { duration: 0 },
      colors: {
        type: "color",
        duration: 7000,
        from: "transparent",
      },
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart - Multi Axis",
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'x',
        }
      }


    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 90,
        }
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          callback: function (value, index, ticks) {
            return value;
          },
        },

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
  },
};

var ctx = document.getElementById("myCharts").getContext("2d");
new Chart(ctx, config);

// Chart2 data

let chart2_labels1 = [ "1 Jun", "2 Jun", "3 Jun", "4 Jun", "5 Jun", "6 Jun", "7 Jun", "8 Jun", "9 Jun", "10 Jun", "11 Jun", "12 Jun", "13 Jun", "14 Jun", "15 Jun", "16 Jun", "17 Jun", "18 Jun", "19 Jun", "20 Jun", "21 Jun", "22 Jun", "23 Jun", "24 Jun", "25 Jun", "26 Jun", "27 Jun", "28 Jun", "29 Jun", "30 Jun",];

let chart2_data1 = [ 600, 500, 400, 300, 210, 120, 50, 360, 180, 210, 120, 220, 360, 180, 210, 120, 220, 360, 180, 210, 120, 220, 360, 180, 210, 120, 220, 360, 180, 210, 120, 220, 360, 180, 210, ];
var chart2_data2 = [ 10, 2, 3, 6, 8, 4, 9, 10, 10, 6, 6, 7, 8, 7, 6, 8, 10, 10, 7, 7, 10, 6, 6, 10, 9, 10, 9, 7, 6, 4, 9, 10, 7, 7, 6, ];
var chart2_data3 = [ 10, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, ];
var chart2_data4 = [ 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

var datasets2 = [
  { type: "line", label: "EmoFreq2", backgroundColor: "hsl(305, 82%, 48%)", borderColor: "hsl(305, 82%, 48%)", data: chart2_data1,yAxisID: 'y', fill: false, },
  { type: "line", label: "Energy2", backgroundColor: "hsl(229, 80%, 71%)", borderColor: "hsl(229, 80%, 71%)", data: chart2_data2, yAxisID: 'y1', fill: false, },

  { type: "bar", label: "Travel2", backgroundColor: "hsl(234, 54%, 93%)", borderColor: "hsl(234, 54%, 93%)", data: chart2_data3, yAxisID: 'y1',fill: false, },
  { type: "bar", label: "Being Sick2", backgroundColor: "hsl(306, 76%, 87%)", borderColor: "hsl(306, 76%, 87%)", data: chart2_data4, yAxisID: 'y1', fill: false, },
];


var config2 = {
  type: "bar",
  data: {
    labels: chart2_labels1,
    datasets: datasets2,
    borderWidth: 1,
  },
  options: {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    animation: {
      numbers: { duration: 0 },
      colors: {
        type: "color",
        duration: 7000,
        from: "transparent",
      },
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Chart2 - Multi Axis",
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'x',
        }
      }
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {

          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return value;
          },
        },
      },
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 90,
        }
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {

          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return value;
          },
        },
        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
  },
};
var ctx2 = document.getElementById("myCharts2").getContext("2d");
var b = new Chart(ctx2, config2);

// function char2Show() {
//   return b;
// }

// char2Show();
var selectArray = [];
var comboA = "";
var comboB = "";
function createDataArray() {}

function getComboA(selectObject) {
  if (!selectObject) return;
  dropdown1ValueSet(selectObject.value);
  b.destroy();
  var getA = datasets2.filter((e) => e.label == selectObject.value);

  if (selectArray.length == 0) {
    selectArray.push(getA[0]);
    comboA = 0;
  } else if (comboA === "" && selectArray.length == 1) {
    selectArray.push(getA[0]);
    comboA = 1;
  } else {
    selectArray[comboA] = getA[0];
  }
  selectArray[0].yAxisID ='y'
  selectArray[0].backgroundColor = 'hsl(305, 82%, 48%)'
  selectArray[0].borderColor = 'hsl(305, 82%, 48%)'
  config2.data.datasets = selectArray;
  b = new Chart(ctx2, config2);
  console.log(selectArray);
}

var e = document.getElementById("dropDown1");
getComboA(e)

function getComboB(selectObject) {
  if (!selectObject) return;
  dropdown2ValueSet(selectObject.value)
  b.destroy();
  var getB = datasets2.filter((e) => e.label == selectObject.value);
  if (selectArray.length == 0) {
    selectArray.push(getB[0]);
    comboB = 0;
  } else if (selectArray.length == 1 && comboB === "") {
    selectArray.push(getB[0]);
    comboB = 1;
  } else {
    selectArray[comboB] = getB[0];
  }
  selectArray[1].yAxisID ='y1'
  selectArray[1].backgroundColor = 'hsl(229, 80%, 71%)'
  selectArray[1].borderColor = 'hsl(229, 80%, 71%)'
  config2.data.datasets = selectArray;
  b = new Chart(ctx2, config2);
  console.log(selectArray);
}

var f = document.getElementById("dropDown2");
getComboB(f)
