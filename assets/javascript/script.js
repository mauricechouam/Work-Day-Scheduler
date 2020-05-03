var m = moment();
var $currentday = $("#currentDay");
var $currentime = $("#currentime");
var $description = $(".description");
var $save = $(".saveBtn");
var $hour = $(".hour");

$currentday.text(m.format('LLL').toString());
$currentime.text(m.format("LT"));

// Function to Display the pass time
passtime = function () {
    for (var i = 1; i <= 5; i++) {
        var m = moment();
        // set Minute to 00
        m.minutes("");
        //change Moment Format and display
        $("#ptime" + i).text(m.subtract(i, 'h').format("LT"));   
    }
}  
// Fucntion to Display the Furtur time
futurtime = function () {
    for (var i = 1; i <= 5; i++) {
        var m = moment();
        // set Minute to 00
        m.minutes("");
         //change Moment Format and Display
        $("#ftime" + i).text(m.add(i, 'h').format("LT"));
    }
}
// calling Time Display Functions 
futurtime();
passtime();
getDescription();


//Clic Event Fucntion for Save Button
$(".saveBtn").on("click", function () {
    console.log(this);
    
// get Time from Text area
    const IDtime = $(this).siblings(".description").attr("data-time");

// get User Input
    const UserEnter = $(this).siblings(".description").val();

// Store them to lOcal storage
    localStorage.setItem(IDtime, UserEnter);

})

function getDescription() {
    const userInput = $(".description");
    


 
    
}



