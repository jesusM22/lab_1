function palindromo(string)
{
    console.log(string);
    let convertircadena = string.split("");
    console.log(convertircadena);

    let revertirarreglo = convertircadena.reverse("");
    console.log(revertirarreglo);

    let unirarreglo = revertirarreglo.join("");
    console.log(unirarreglo);

    if(string === unirarreglo){

    console.log("la palabra es palindroma")
    }
    else{
        console.log("la palabra no es palindromo")
    }	
}
export {palindromo}
palindromo("hola mundo")