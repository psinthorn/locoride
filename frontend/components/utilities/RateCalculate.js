// Function RateCalculate
// Calculate rate based on distance and rate array 
  // Explanation
  // 1. calculateRate Function:
  //  - Calculates the rate based on the distance and rate array.
  //  - Uses Math.ceil() to round up the rate to the nearest integer.
  //  - For distances less than or equal to 5, it returns the base rate rounded up.
  //  - For distances between 5 and 15, it calculates the rate for the additional distance and rounds up.
  //  - For distances greater than 15, it calculates the rate for the additional distance beyond 15 and rounds up.
  
  // 2. Displaying the Rate:
  //  - The rate is displayed as an integer rounded up using Math.ceil().

  // Math.ceil() This to ensures that the rate is displayed as an integer rounded up to the nearest whole number.
  // The rate is calculated based on the distance and the rate array provided as input.
  

// Usage of RateCalculate Function
// 1. Import the RateCalculate function in the component where the rate calculation is required.
// 2. Call the RateCalculate function with the distance and rate array as arguments.
// 3. Use the calculated rate to display the estimated fare for the distance.
// 4. The rate is displayed as an integer rounded up to the nearest whole number using Math.ceil().
// 5. The RateCalculate function can be used in components where the fare estimation based on distance is required.

const RateCalculate = ({distance}, rate) => {
  if (distance <= 5) {
    return Math.ceil(rate[0])
  }else if (distance >5 && distance <= 15) {
    return Math.ceil((distance - 5) * rate[1] + rate[0])
  }else if (distance > 15) {
    return Math.ceil((distance - 15) * rate[2] + (10 * rate[1]) + rate[0])
  }
}

export default RateCalculate;

