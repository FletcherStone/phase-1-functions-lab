// Code your solution in this file!

function distanceFromHqInBlocks (pickUpLocation){
    const hqLocation = 42;
    return Math.abs(pickUpLocation - hqLocation)
}

function distanceFromHqInFeet(pickUpLocation){
    const blocks = distanceFromHqInBlocks(pickUpLocation);
    const feetPerBlock= 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start,destination){
    const blocks= Math.abs(destination - start);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let price;
  
    if (distance <= 400) {
      price = 0;
    } else if (distance > 400 && distance <= 2000) {
      price = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      price = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return price;
  }