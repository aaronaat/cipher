var capFirstLast = function(word){
  var letter1 = word.charAt(0).toUpperCase();
  var letter2 = word.charAt(word.length - 1).toUpperCase();
  return letter1 + letter2;
};

var reverseOrder = function(word){
  return word.charAt(1) + word.charAt(0);
};

var thirdFunction = function(word){

  return word + reverseOrder(capFirstLast(word));
};

var countDivide = function(word){
   return word.charAt(word.length / 2) + word;
};

var mirror = function(word){
  var m = word.split();
  return m.reverse();
};

var word = prompt("Please enter a sentence.");
alert(countDivide(thirdFunction(word)));
