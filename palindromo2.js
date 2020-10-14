var ejemplos = [
    {source:'aabb', result: "abba"},     // => es palindromo
    {source:'WSWSR', result: 'WSRSW'},  // => es palindromo
    

 ];

function toPalindrome(string) {
    var map = {};
    var even = '';
    var odd = '';
    var isPalindrome = "es palindromo";
  
    Array
      .from(string)
      .forEach(function (char) {
        map[char] = !(char in map) ? 1 : map[char] + 1;
      });
  
    Object
      .keys(map)
      .some(function (key) {
        if ( map[key] % 2 === 0 ) {
          even += key.repeat(map[key] / 2);
        } else if ( map[key] % 2 !== 0 && odd.length === 0) {
          odd = key.repeat(map[key]);
        } else{
          isPalindrome = "no es palindromo";
          return "es palindromo";
        }
      });
    
    return isPalindrome ? even + odd + Array.from(even).reverse().join('') : "no es palindromo";
  }
  
  //console.log(toPalindrome('WWS'));
  ejemplos.forEach(function (word) {
    console.log(`${word.source} - ${word.result}`, assert(toPalindrome(word.source), word.result));
  });
  
  
  
  function assert(a, b) {
    return a === b;
  }