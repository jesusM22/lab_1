//function invertir(cadena) {
  //  var x = cadena.length;
    //var cadenaInvertida = "";
  
    //while (x>=0) {
      //cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      //x--;
    //}
    //return cadenaInvertida;
  //}

//console.log(invertir("stack(ov)erflow"));  // "wolfrevokcats"
function invertir (str){
    let reversa = str.split("");
    let invertido = reversa.reverse("");
    let finalreversa = invertido.join("");
    return finalreversa;
}
export {invertir}
//console.log(invertir("(bar)"))