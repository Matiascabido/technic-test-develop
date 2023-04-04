//(Cost per minute) * (ride time) + (Cost per mile) * (ride distance)
function fareSimulater (ride_time, ride_distance, cost_per_minute, cost_per_mile ) {
  return cost_per_mile.map((costPerMile, index) => {
    const minuteCost = cost_per_minute[index]; 
    return (minuteCost * ride_time) + (costPerMile * ride_distance);
  })
}


const ride_time = 30
const ride_distance = 7
const cost_per_minute = [0.2, 0.35, 0.4, 0.45]
const cost_per_mile = [1.1, 1.8, 2.3, 3.5]

console.log(fareSimulater(ride_time, ride_distance, cost_per_minute, cost_per_mile ));
// [ 13.700000000000001, 23.1, 28.099999999999998, 38 ]
