function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
        document.getElementById('bmiResult').textContent = "Please enter valid weight and height.";
        document.getElementById('category').textContent = "";
        return;
    }

    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    const roundedBMI = bmi.toFixed(2);

    document.getElementById('bmiResult').textContent = `Your BMI is: ${roundedBMI}`;

    let category = "";

    if (bmi < 18.5) {
        category = "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "You have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "You are overweight.";
    } else {
        category = "You are obese.";
    }

    document.getElementById('category').textContent = category;
}