'use strict';
const c = console.log.bind(this);
// Start Here

// <---------- Do Not Touch the Code Beyond this line ----------------------------->
function testTemperatureConversion() {
  // Test 1: 0°C should equal 32°F
  if (temperatureConversion(0) !== 32) {
    console.error('Test failed: 0°C should equal 32°F');
  }

  // Test 2: 20°C should equal 68°F
  if (temperatureConversion(20) !== 68) {
    console.error('Test failed: 20°C should equal 68°F');
  }

  // Test 3: -40°C should equal -40°F
  if (temperatureConversion(-40) !== -40) {
    console.error('Test failed: -40°C should equal -40°F');
  }

  // Test 4: 100°C should equal 212°F
  if (temperatureConversion(100) !== 212) {
    console.error('Test failed: 100°C should equal 212°F');
  }

  console.log('All tests passed!');
}

testTemperatureConversion();

function testCylinderVolume() {
  // Test 1: A cylinder with radius 2 and height 5 should have a volume of 62.8318
  if (cylinderVolume(2, 5) !== 62.8318) {
    console.error(
      'Test failed: Cylinder with radius 2 and height 5 should have a volume of 62.8318'
    );
  }

  // Test 2: A cylinder with radius 4 and height 10 should have a volume of 502.6548
  if (cylinderVolume(4, 10) !== 502.6548) {
    console.error(
      'Test failed: Cylinder with radius 4 and height 10 should have a volume of 502.6548'
    );
  }

  // Test 3: A cylinder with radius 1 and height 1 should have a volume of 3.14159
  if (cylinderVolume(1, 1) !== 3.14159) {
    console.error(
      'Test failed: Cylinder with radius 1 and height 1 should have a volume of 3.14159'
    );
  }

  console.log('All tests passed!');
}

testCylinderVolume();

// Test Script
console.log(calculateRectangleArea(5, 7)); // Expected output: 35
console.log(calculateRectangleArea(10, 3)); // Expected output: 30

// Test Script
console.log(calculateAverage(4, 6)); // Expected output: 5
console.log(calculateAverage(10, 20)); // Expected output: 15

// Test Script
console.log(kilometersToMiles(5)); // Expected output: 3.10686
console.log(kilometersToMiles(10)); // Expected output: 6.21371
