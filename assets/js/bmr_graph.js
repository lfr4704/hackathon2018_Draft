// window.onload = alert(localStorage.getItem("storageName"));

/* Get BMR Value From Previous Page */

var bmr = Math.round(localStorage.getItem("storageName"), 0);

$('#BMR_text').html(bmr);

//Gives base percentages based upon BMR
$('#carb_calories').html(Math.round(((55/100 * bmr)/4),0));
$('#fat_calories').html(Math.round(((20/100 * bmr)/9),0));
$('#protein_calories').html(Math.round(((25/100 * bmr)/4),0));




/* W3 Schools Code */
// Code for Carb Slider
var carbSlider = document.getElementById("carb_slider");
var carbs = $('#carb_calories');
var carb_output = document.getElementById("textInputCarbs");
carb_output.innerHTML = carbSlider.value;

carbSlider.oninput = function() {
  carb_output.value = this.value;
  carbs.html(Math.floor((this.value/100 * bmr)/4));
}
// Code for fat slider
var fatSlider = document.getElementById("fat_slider");
var fat = $('#fat_calories');
var fat_output = document.getElementById("textInputFats");
fat_output.innerHTML = fatSlider.value;

fatSlider.oninput = function() {
  fat_output.value = this.value;
  fat.html(Math.floor((this.value/100 * bmr)/9));
}
// Code for protein slider
var proteinSlider = document.getElementById("protein_slider");
var protein = $('#protein_calories');
var protein_output = document.getElementById("textInputProtein");
protein_output.innerHTML = proteinSlider.value;

proteinSlider.oninput = function() {
  protein_output.value = this.value;
  protein.html(Math.floor((this.value/100 * bmr)/4));
}

// function updateTextInput(val, macro) {
//         if (macro == 'carbs') {
//           document.getElementById('textInputCarbs').value=val;
//         }else if (macro == 'fats') {
//           document.getElementById('textInputFat').value=val;
//         } else if (macro == 'proteins') {
//           document.getElementById('textInputProtein').value=val;
//         }
//       }
