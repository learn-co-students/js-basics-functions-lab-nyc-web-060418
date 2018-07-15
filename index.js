// Code your solution in this file!

function distanceFromHqInBlocks(street_num) {
  if (street_num < 42) {
    return 42 - street_num;
  }
  return street_num - 42;
}

function distanceFromHqInFeet(street_num) {
  return distanceFromHqInBlocks(street_num) * 264;
}

function distanceTravelledInFeet(biggining_block, destination_block) {

  if (destination_block > biggining_block) {
    return (destination_block - biggining_block) * 264;
  }

  return (biggining_block - destination_block) * 264;

}

function calculatesFarePrice(start, destination) {
  let charge = 0;
  let totalDist = distanceTravelledInFeet(start, destination);
  let dist = totalDist;

  if (dist >= 400 && dist <= 2000) {
    dist -= 400
    charge += (dist * 0.02);
  }

  else if (totalDist > 2000 && totalDist <= 2500) {
    charge += 25.00
  }

  else if (totalDist > 2500) {
    return "cannot travel that far"
  }

  return charge;
}
