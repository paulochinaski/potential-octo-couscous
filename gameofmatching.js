var name1 = prompt("Your name?");
var name2 = prompt("Your lover's name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 50) {
    console.log( name1 + " and " + name2 + " have a " + loveScore + "% romantic match. CONGRATS! THATS AWESOME");
}

if (loveScore < 50 && loveScore > 30) {
    console.log( name1 + " and " + name2 + " have a " + loveScore + "% romantic match. MEDIUM");
}

else {
    console.log( name1 + " and " + name2 + " have a " + loveScore + "% romantic match. NORMAL");
}
