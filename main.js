console.log('homework');
//store the current cities
//when clicking the drop-down menu
//before clicking the drop-down menu, the menu can be pre-loaded(updated)
//drop-down menu shows up: one by one

var cities = ['---Select---', 'austin', 'la', 'sf', 'nyc', 'sydney'];

cities.forEach(function(city) {
  $('#city-type').append('<option>' + city + '</option>');
})

//when clicking the city (change event)
//if the city name matches the stored city name
//updated picture

$('#city-type').change(function() {
  var selectedCity = $('#city-type option:selected').val();
  $('body').removeClass();
  $('body').addClass(selectedCity);
})

// $('#city-type').change(function() {
//   var selectedCity = $('#city-type option:selected').val();
//   $('body').removeClass();
//   if (selectedCity === 'austin') {
//     $('body').addClass('austin');
//   } else if (selectedCity === 'la') {
//     $('body').addClass('la');
//   } else if (selectedCity === 'sf') {
//     $('body').addClass('sf');
//   } else if (selectedCity === 'nyc') {
//     $('body').addClass('nyc');
//   } else if (selectedCity === 'sydney') {
//     $('body').addClass('sydney');
//   } else {
//     $('body').addClass('default');
//   }
// })

// var seletedOption = $('#city-type option:selected')
// var selectedOption2 = $(this)