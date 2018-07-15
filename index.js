// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else if (block < 42) {
    return 42 - block;
  } else {
    return 0;
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  if (block1 > block2) {
    return (block1 - block2) * 264;
  } else {
    return (block2 - block1) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else {
    return (distance - 400) * .02;
  }
}
