var m = moment();

var currentday = $("#currentDay");
var currentime = $("#currentime");

 currentday.text(m.format('LLLL').toString());
currentime.text(m.format("LT"));

// Function to Display the pass tim
passtime = function () {
    for (var i = 1; i <= 5; i++) {
        var m = moment();
        // set Minute to 00
        m.minutes("");
        //change Moment Fromat
        m.format("h")
        $("#ptime" + i).text(m.subtract(i, 'h').format("LT"));   
    }
}  
// Fucntion to Display the Furtur time
futurtime = function () {
    for (var i = 1; i <= 5; i++) {
        var m = moment();
        // set Minute to 00
        m.minutes("");
         //change Moment Fromat
        moment().format("h")
        $("#ftime" + i).text(m.add(i, 'h').format("LT"));
    }
}
    
// calling Time Display Functions 
futurtime();
passtime();
