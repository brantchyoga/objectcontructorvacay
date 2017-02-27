function vacation(location, landmark, food, language) {
  this.location = location;
  this.landmark = landmark;
  this.food = food;
  this.language = language;
}
vacation.prototype.vacationInfo = function() {
  return "<h4>" + this.location +"</h4>" + "<ul>" + "<li>" +this.landmark+"</li>" + "<li>" + this.food + "</li>" +"<li> "+this.language + "</li>" + "</ul>";
}

$(function(){
  $("form#locations").submit(function(event){
    event.preventDefault();

    var inputtedLocation = $("input#newLocation").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedFood = $("input#food").val();
    var inputtedLanguage = $("input#language").val();

    var addVacation = new vacation (inputtedLocation, inputtedLandmark, inputtedFood, inputtedLanguage);

    $("ul#list").append("<li><span class='contact'>"+ addVacation.vacationInfo() + "</span></li>");

    $(".location").last().click(function() {
      // $("#show-contact").show();
      });

    $("input#newLocation").val("");
    $("input#landmark").val("");
    $("input#food").val("");
    $("input#llanguage").val("");
    console.log(inputtedLocation, inputtedLandmark);
  });
});
