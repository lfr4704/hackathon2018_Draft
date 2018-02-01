//Default State
var isMetric = true;

//Metric Code
function showMetric() {
  // alert("Show Metric")
  document.getElementById('weight').placeholder = "Kilograms";
  document.getElementById('height').placeholder = "Meters";
  document.getElementById('inches').style.display = "none";
  isMetric = true;
}

function calcBMI_metric(weight, height) {
  var bmi = (weight/(height * height));
  return bmi;
};

//Imperial Code
function showImperial() {
  // alert("Show Imperial!");
  document.getElementById('weight').placeholder = "Pounds";
  document.getElementById('height').placeholder = "Feet";
  document.getElementById('inches').style.display = "block";
  isMetric = false;
}

function find_height(inches, feet) {
  var height;
  height = Number(inches) + Number(feet * 12);
  return height;
}

function collect_height(metric){
  var user_height, user_feet, user_inches;
  if (metric == true){
    user_height = document.getElementById("height").value;
  } else {
    user_height = document.getElementById('height').value;
  }
  return user_height;
}

function calcBMI_imperial(impHeight, impWeight) {
  var bmi = ((Number(impWeight)*703)/(Number(impHeight)*Number(impHeight)));
  return bmi;
};

function rate_bmi(bmi) {
  if (bmi >= 40) {
    return "<p id='ExtremelyObese'> Extremely Obese</p>";
  } else if (bmi >= 30) {
    return "<p id='Obese'> Obese</p>";
  } else if (bmi >= 25) {
    return "<p id='OverWeight'> Overweight</p>";
  } else if (bmi >= 18) {
    return "<p id='Healthy'> Healthy</p>";
  } else if (bmi >= 12) {
    return "<p id='UnderWeight'> UnderWeight</p>";
  } else {
    return "<p id='not_real'> This is not a realistic BMI</p>";
  }
}

// Finish rating function

function calc_bmi() {
  var weight, height, bmi, inches, feet, rating;
  // alert("Metric: " + isMetric);
  weight = Number(document.getElementById('weight').value);
  feet = Number(document.getElementById('height').value);
  inches = Number(document.getElementById('inches').value);
  height = Number(collect_height(isMetric));

  if (isMetric == true){
    alert("Weight: " + weight);
    alert("Height: " + height);
    bmi = calcBMI_metric(weight, height);
  } else {
    height = find_height(inches, feet);
    // alert("Weight: " + weight);
    // alert("Height: " + height);
    bmi = calcBMI_imperial(height, weight);
  }
  bmi = Math.round(bmi * 100)/100;

  rating = rate_bmi(bmi);


  var ans = "<h1 id='result'>Your BMI Is: ";
   document.getElementById("bmi").innerHTML = ans + bmi + rating + "</h1>";
  // alert(ans);
}



document.getElementById('bmi_metric').addEventListener("click", showMetric);

document.getElementById('bmi_imperial').addEventListener("click", showImperial);

document.getElementById('bmi_button').addEventListener("click", calc_bmi);
