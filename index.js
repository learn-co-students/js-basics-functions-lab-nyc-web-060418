// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    if (street > 42){
        return street - 42;
    }
    else{
        return 42 - street;
    }
};

function distanceFromHqInFeet(street){
    return Math.abs(distanceFromHqInBlocks(street))*264;
};

function distanceTravelledInFeet(block1, block2){
    return Math.abs((block1 - block2)*264);
};

function calculatesFarePrice(block1, block2){
    const distance = distanceTravelledInFeet(block1, block2);
    if (distance <= 400){
        return 0;
    } else if (distance <= 2000 && distance > 400){
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
};