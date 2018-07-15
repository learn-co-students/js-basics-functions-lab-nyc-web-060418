// Code your solution in this file!
function distanceFromHqInBlocks(block){
  const hq = 42;
  if (block > hq) {
    return block - hq;
  } else {
    return hq - block;
  }
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(north,south) {
   if (south > north) {
     let distance = south - north;
     return distance * 264;
   } else {
     let distance = north - south;
     return distance * 264;
   }
}

function calculatesFarePrice(start,destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }

}
