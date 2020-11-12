var randomNumberGenerator = function () {
     /*Generates random whole numbers from the ramge of 0 to 100*/
     return Math.floor((Math.random() * 20) + 1);
};

var populateGrid = function () {

     var innerDivs = document.getElementById("parent-container").children;
     for (var i = 0; i < innerDivs.length; i++) {
          var innerlabel = innerDivs[i].children;
          var number = randomNumberGenerator();
          var color = "red";
          innerlabel[0].innerHTML = number;
          if(number > 10) {
               innerDivs[i].style.backgroundColor = color;
          }
     }

};

window.onload = populateGrid();