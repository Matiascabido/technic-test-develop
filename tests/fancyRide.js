function fancyRide(length, fares) {
  const credit = 20;
  const rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"]

  const fareCar = fares.findIndex(fare => {
    return (fare * length) > credit 
  }); 

  return fareCar < 0 ? rides.at(-1): rides[fareCar - 1];
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
