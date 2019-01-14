var capFirstLast = function(word) {
  word = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  word = word.substring(0, word.length - 1) + word.charAt(word.length - 1).toUpperCase();
  return word;
};



var word = prompt("Please enter a sentence.");
alert(capFirstLast(word));
