// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber) {
 if (blockNumber > 42) {
   return blockNumber - 42;
 } else {
   return 42 - blockNumber;
 }
}


function  distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet (start, endpoint) {
  if (start < endpoint) {
    return (endpoint - start) * 264;
  } else {
    return (start - endpoint) * 264;
  }
}

function calculatesFarePrice (start, endpoint) {
  const distance = distanceTravelledInFeet(start, endpoint);

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
