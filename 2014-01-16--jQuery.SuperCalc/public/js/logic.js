function containsChar(word, letter){
  return word.indexOf(letter) !== -1;
}

function parseTags($tags){
   return $.map($tags, function(tag){
   return parseFloat(tag.textContent);
   });
}

function sum(arr){
  var total = 0;
  for(var i in arr){ 
    total += arr[i];
  }
  return total;
}