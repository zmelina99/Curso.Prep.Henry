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
    for (var i = 0; i < array.length; i++){
      return (array[i]);
    }
  }
  
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
  
    return ((palabras[0]), ' ', (palabras[1]), ' ' (palabras [2]))
  
  
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



  //Leeria el array y me fijaria si el elemento que busco esta 
  //Si el elemento esta, devolvería true, 
  //Sino, devolveria false 
  
  function agregarNumeros(numeros) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
 
  var suma = 0
  for (var i= 0; i < numeros.lenght; i++){
    suma + numeros[i];
  }

 return (suma) 
  }
  //sumaria ele 1 + ele2 + ele 3 +ele 4 
  
  
  
  function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    var suma = 0
    for (var i= 0; i < resultadosTest; i++){
        suma + resultadosTest[i]
    }
    return suma/resultadosTest.length

   
    }
    //Quiero sumar todos los elemento del array y cuando tenga el total, dividirlo por la cantidad
// de elementos que contiene el array  }
  
  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    var max = Math.max(numeros);
    return max 
  }
  //Leer cada numero del array e identificar el mas grande 
  
  function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0
    // Si se pasa un argumento, simplemente devuélvelo
    // Tu código:
    
    }
  //multiplicaria arg 1*arg2*arg3 y devolveria el resultado
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    devolverPrimer, Elemento,
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
  