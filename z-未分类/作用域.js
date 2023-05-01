var color = "blue";

function changeColor() {
  if (color === "blue") {
    color = "red";
  } else {
    color = "blue";
  }
}

changeColor();

var color2 = "blue";

function changeColor2() {
  let anotherColor = "red";

  function swapColors() {
    let tempColor = anotherColor;
    anotherColor = color2;
    color2 = tempColor;

    // color, anotherColor, and tempColor are all accessible here
  }

  // color and anotherColor are accessible here, but not tempColor
  swapColors();
}

// only color is accessible here
changeColor2();
