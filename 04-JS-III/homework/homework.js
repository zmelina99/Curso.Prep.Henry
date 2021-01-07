// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
return (array[array.length-1]);

}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
return (array.length);
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayNuevo = []
  for (var i = 0; i < array.length; i++){
    arrayNuevo[i] = (array[i] +1 );
  }
  return arrayNuevo
}
// agarro el primer elemento y le sumo 1 e imprimo el resultado, despues el segundo, despues el tercero 

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return (array)
  
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return (array)
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = ''
  for (var i = 0; i < palabras.length; i++){
    if (i === palabras.length -1){
      return frase + palabras[i]
 }
    frase = (frase + palabras[i] + ' ')
  
      
  }
  return frase 
}

//Lo que quiero que pase es que cada palabra de mi arreglo se imprima, una al lado de la otra. 
//Si yo tuviera que hacerlo, escribiria la primer palabra del arrglo, luego dejaria un espacio y escribiria la segunda 
//y asi sucesivamente 

  function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    for (var i = 0; i< array.length; i++){
        if (array[i] === elemento)
    {
    return true
    }
}

    return false 
 
}


  function agregarNumeros(numeros) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
 
  var suma = 0
  for (var i= 0; i < numeros.length; i++){
    
    suma = (suma+numeros[i])
}
return suma
  
}


 function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
var suma = 0
  for (var i= 0; i< resultadosTest.length; i++){
suma = (suma+resultadosTest[i])
}
return suma/resultadosTest.length
}


  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    var maxValue = numeros[0]
    for (var i= 0; i< numeros.length; i++)
   if (maxValue<numeros[i]){
      maxValue=numeros[i]
   }
return maxValue
          
  }



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
if (arguments.length<1){
   return 0
 }
  var mult = 1
  for (var i= 0; i < arguments.length; i++){
    mult = (mult * arguments[i])
}
return mult
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
