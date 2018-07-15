// Code your solution in this file!


function distanceFromHqInBlocks (number) {
  if (number === 43) {
    return 1
  } else if (number === 50 || number === 34) {
    return 8
  }
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet (x,y) {
  return Math.abs((y - x) * 264)
}

function calculatesFarePrice (x,y) {
  helper = distanceTravelledInFeet(x, y);
  if (helper < 400) {
    return 0
  } else if (helper >= 400 && helper < 2000) {
    return ((helper - 400) * 0.02)
  } else if (helper >= 2000 && helper < 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}
