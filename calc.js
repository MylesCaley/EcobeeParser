var fs = require('fs')
var Table = require('../node_modules/dat-table')

var table = Table.createTable(fs.readFileSync('file3.csv', 'utf8'))

function sum (acc, i) {
  if (i)
    return acc + i;
  else
    return acc;
}

var rows = 0;
function each (temp,i) {
   if (temp)
   {
      rows++;
   }
}

//sum each column.
//var sums = table.reduce(sum)

table.each(10,each);
days = ((rows*5)/60/24) 
//sum just one column.
var outdoorTempTotal = table.reduce(10,sum);
var outdoorTempAvg = outdoorTempTotal/rows;
var heatpumpUsageSeconds = table.reduce(13, sum)
var stripsUsageSeconds = table.reduce(14, sum)
var kwhTotal = (heatpumpUsageSeconds/60/60)*3.6 + (stripsUsageSeconds/60/60)*10;
var daysLeft = 30 - days;
var kwhPerDay = kwhTotal/days;
var kwhLeft = daysLeft * kwhPerDay;

console.log("days: " + days);
console.log("avg temp: " + outdoorTempAvg);
console.log("kwh hp: " + heatpumpUsageSeconds/60/60); 
console.log("kwh strips: " + stripsUsageSeconds/60/60); 
console.log("kwh/day: " + kwhPerDay);
console.log("efficiency: " + outdoorTempAvg/kwhTotal);
console.log("amount $$: " + kwhTotal*.09); 
console.log("amount for month at current rate $$: " +( (kwhTotal*.09) + (kwhLeft *.09)) ); 
