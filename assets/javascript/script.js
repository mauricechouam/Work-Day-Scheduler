var m = moment();
var $currentday = $("#currentDay");
var $currentime = $("#currentime");
var $description = $(".description");
var $save = $(".saveBtn");
var $hour = $(".hour");





$currentday.text(m.format('LLL').toString());
$currentime.text(m.format("LT"));

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


//Clic Event Fucntio
$(".saveBtn").on("click", function () {
    console.log(this);
    
    const timeID = $(this).siblings(".description").attr("data-time");
 

    const UserEnter = $(this).siblings(".description").val();
        
        console.log(timeID);
      
        console.log(UserEnter);
    
    
    
 
})




