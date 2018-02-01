
/* Code for sliders */

// function updateTextInput(val, macro) {
//         if (macro == 'carbs') {
//           document.getElementById('textInputCarbs').value=val;
//         }else if (macro == 'fats') {
//           document.getElementById('textInputFat').value=val;
//         } else if (macro == 'proteins') {
//           document.getElementById('textInputProtein').value=val;
//         }
//       }

$("#gender").on('change', function(){
    console.log("list item selected");
    var val = $(this).val();

    console.log(val);
});




/* Global Variables */
var isMetric = true;

/* Calculations */

//Metric Calculations
function get_height() {
  var height1, height2, height;
  //Height1 is either meters or feet
  //Height2 is either centimeters or inches
  height1 = Number($('#height1').val());
  height2 = Number($('#height2').val());
  // alert("height1 " + height1);
  // alert("height2 " + height2);
  if (isMetric == true){
    //Metric Calculations
    height = (height1 * 100) + height2;
    // alert("Metric Height (cm): " + height);
  }else if (isMetric == false) {
    //Imperial Calculations
    height = (height1 * 12) + height2;
    // alert("Imp Height (inches): " + height);
  }
  return height;
};

function bmr_calculation_metric_male(weight, height, age) {
  // alert("Weight: " + weight);
  // alert("Height: " + height);
  // alert("Age: " + age);
  var bmr = 88 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
  return bmr;
};

function bmr_calculation_metric_female(weight, height, age) {
  var bmr = 448 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  return bmr;
};

//Imperial Calculations

function bmr_calculation_imp_male(weight, height, age) {
  // alert("Calc Height: " + )
  var bmr = 88 + (6.1 * weight) + (12.2 * height) - (5.7 * age);
  return bmr;
};

function bmr_calculation_imp_female(weight, height, age) {
  var bmr = 448 + (4.2 * weight) + (7.9 * height) - (4.3 * age);
  return bmr;
};

//Collecting Data/Getting BMR

function collect_data_metric() {
  var age, gender, height, weight, bmr;
  age = Number($('#age').val());
  // gender = $('input[name=button]:checked').val();
  gender = $('#gender').val();
  height = get_height();
  weight = Number($('#weight').val());
  if (gender == "male") {
    bmr = bmr_calculation_metric_male(weight, height, age);
  } else if (gender == "female") {
    bmr =  bmr_calculation_metric_female(weight, height, age);
  }
  return Math.round(bmr);
};

function collect_data_imp(){
  var age, gender, height, weight, bmr;
  age = Number($('#age').val());
  gender = $('#gender').val();
  height = get_height();
  weight = Number($('#weight').val());
  if (gender == "male") {
    bmr = bmr_calculation_imp_male(weight, height, age);
  } else if (gender == "female") {
    bmr =  bmr_calculation_imp_female(weight, height, age);
  }
  return Math.round(bmr);
};







/* Control, Metric or Imperial */
function showMetric() {
  $("#height1").attr("placeholder", "Meters");
  $("#height2").attr("placeholder", "Centimeters");
  $("#weight").attr("placeholder", "Kilograms");
  isMetric = true;
}

function showImperial() {
  $("#height1").attr("placeholder", "Feet");
  $("#height2").attr("placeholder", "Inches");
  $("#weight").attr("placeholder", "Pounds");
  isMetric = false;
  // alert(value);
}

/* On Event */
//Change to metric
$("#bmi_metric").click(function(){
  // alert("Metric has been clicked");
  showMetric();
  });
//Change to imperial
$("#bmi_imperial").click(function(){
  // alert("Imperial has been clicked");
  showImperial();
  });
//Find BMR
$("#bmr_button").click(function(){
  var bmr = 0, message, test, activity;
  if (isMetric == true) {
    bmr = collect_data_metric();
  } else if (isMetric == false) {
    bmr = collect_data_imp();
  }
  activity = parseFloat($("#activity_multiplier").val());
  // alert("Activity Factor: " + activity)
  bmr = bmr * activity;
  message = "<p>BMR: " + bmr + "</p";
  $('#bmr_page').html(message);
  // alert("BMR: " + message);
  localStorage.setItem("storageName", bmr);
  // alert("User bmr: " + bmr);
  // test = $('#bmr_page').html();
  // alert("Current HTML: " + test);
});


/* */
