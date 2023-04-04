# UBER TEST

Una prueba técnica de Uber para programadores, con JavaScript.

## First Test ##
Uber is building a Fare Estimator that can tell you how much your ride will cost before you request it.
It works by passing approximated ride distance and ride time through this formula 

(Cost per minute) * (ride time) + (Cost per mile) * (ride distance)

Where Cost per minute and Cost per mile depend on the car type.

You are one of the engineers building the Fare Estimator, so knowing cost per minute and cost per mile for each car type, as well as ride distance and ride time, return the fare estimates for all car types

Example.

For

ride_time = 30
ride_distance = 7
cost_per_minute = [0.2, 0.35, 0.4, 0.45]
cost_per_mile = [1.1, 1.8, 2.3, 3.5]

Out_put

solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38]

Since

30 * 0.2 + 7 * 1.1 = 6 + 7.7 = 13.7
30 * 0.35 + 7 * 1.8 = 10.5 + 12.6 = 23.1
30 * 0.4 + 7 * 2.3 = 12 + 16.1 = 28.1
30 * 0.45 + 7 * 3.5 = 13.5 + 24.5 = 38


## Second Test ##

Being a new Uber user, you have $20 off your first ride.
You want to make the most out of it and drive in the fanciest car you can afford, without spending any out-of-pocket money.
There are 5 options, from the least to the most expensive: 
"UberX", "UberXL", "UberPlus", "UberBlack" and  "UberSUV"



You know the length 1 of your ride in miles and how much one mile costs for each car. Find the best car you can afford.


Example.

For 1 = 30 and fears = [0.3, 0.5, 0.7, 1, 1.3],
the output should be 
solution(1, fares) = "UberXL".

The cost for the ride in this car would be $15, which you can afford, but "UberPlus" would cost $21, which is too much for you.