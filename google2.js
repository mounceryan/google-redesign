
function changeweather(weather) {
    document.getElementById("temperature").innerHTML = window[weather][0];
    document.getElementById("precipitation").innerHTML = window[weather][1];
    document.getElementById("humidity").innerHTML = window[weather][2];
    document.getElementById("wind").innerHTML = window[weather][3];
    document.getElementById("weathericon").src = "" + window[weather][4] + "";
    document.getElementById("today").style.backgroundColor = window[weather][5];
    document.getElementById("tomorrow").style.backgroundColor = window[weather][6];
    document.getElementById("thursday").style.backgroundColor = window[weather][7];
}

var today = ["8&#176;C",
    '20%',
    "72%",
    "7mph",
    "images/sanfrancisco/raincloud.png",
    "white",
    "#EEEEEE",
    "#EEEEEE"
];

var tomorrow = ["5&#176;C",
    '0%',
    "40%",
    "5mph",
    "images/sanfrancisco/sun.png",
    "#EEEEEE",
    "white",
    "#EEEEEE"
];

var thursday = ["2&#176;C",
    '30%',
    "42%",
    "2mph",
    "images/sanfrancisco/snowcloud.png",
    "#EEEEEE",
    "#EEEEEE",
    "white"
];

