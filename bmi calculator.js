function calculateBMI() {
    // Clear previous result
    document.getElementById("result").innerHTML = '';
    document.getElementById("error").innerHTML = '';
  
    // Get user input values
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
  
    // Validate input values
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById("error").innerHTML = "Please enter valid positive numbers for both weight and height.";
      return;
    }
  
    // Convert height from cm to meters
    const heightInMeters = height / 100;
  
    // BMI Calculation
    const bmi = weight / (heightInMeters * heightInMeters);
  
    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
  
    // Display the result
    document.getElementById("result").innerHTML = `Your BMI: <span class="bmi-category">${bmi.toFixed(2)}</span> <br>Category: <span class="bmi-category">${category}</span>`;
  }
  