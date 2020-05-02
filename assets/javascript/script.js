const m = moment();

var currentday = $("#currentDay");
var currentime = $("#currentime");
var format= 

currentday.text(m.format('LLLL').toString());
currentime.text(m.format("LT").toString());

for (var i = 1; i <= 5; i++){
    var a = $("#ftime" + i).text(m.add(i, "h")).text(m.format('LT').toString());
    var b = $("#ptime" + i).text(m.subtract("h",i)).text(m.format('LT').toString());
   

}
