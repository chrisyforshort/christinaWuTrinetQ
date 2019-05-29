$(document).ready(function () {

    // Global Varrible //
    var inputName

    // Function when loginBTN is clicked //
    $("#loginBTN").on("click", function() {
    // This line grabs the input from the textbox //
    inputName = $("#input1").val().trim();
    // This line prints the inputName varriable into the printDiv //
    $("#printDiv").html("Hi " + inputName);
    });

})