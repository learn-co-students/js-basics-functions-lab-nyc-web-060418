// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let distance;

  if (block >= 42) {
    distance = block - 42
  }
  else {
    distance = 42 - block
  }
  return distance
}

function distanceFromHqInFeet(block){

  return (distanceFromHqInBlocks(block) * 264)
}

function distanceTravelledInFeet(a, b) {

  let distance;

  if (a >= b) {
    distance = (a - b) * 264
  }
  else if (b > a) {
    distance = (b - a) * 264
  }

  return distance

}

function calculatesFarePrice(a, b){

  let price;

  let distance = distanceTravelledInFeet(a,b);

   if (distance <= 400){
     price = 0
   }

   else if (distance > 400 && distance < 2000) {
     price = (distance - 400) * 0.02
   }

   else if (distance > 2000 && distance < 2500){
     price = 25
   }
   else if (distance > 2500) {
     return "cannot travel that far"
   }
   return price;
}
