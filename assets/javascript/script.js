var m = moment();

var currentday = $("#currentDay");
var currentime = $("#currentime");

currentday.text(m.format('LLLL').toString());
currentime.text(m.format('LT').toString());

