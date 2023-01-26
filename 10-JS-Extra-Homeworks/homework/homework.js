// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var mat=[];
  let pass=Object.keys(objeto);
  let valores=Object.values(objeto);
  for (let i=0; i<pass.length;i++){
    //mat[i]=["["+pass[i]+","+valores[i]+"]"];
    mat[i]=new Array('['+pass[i]+','+valores[i]+']');
  }
  return mat;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var arr=[];
  var rpta=[];
  var cont=0;
  arr[0]=string.charAt(0);
  for(var i=1;i<string.length;i++){
    for(var j=0;j<arr.length;j++){
        if(arr[j]!==string.charAt(i)){
        cont++;
        }      
      }
      if(cont===j){
        arr[arr.length]=string.charAt(i);
      }
      cont=0;
    }
  var aux=null;
  for (var i=1; i<arr.length;i++){
    for(var j=0; j<arr.length-1;j++){
      if(arr[i]<arr[j]){
        aux=arr[i];
        arr[i]=arr[j];
        arr[j]=aux;
      }
    }
  }
   
  for(var k=0;k<arr.length;k++){
    var contador=0;
    for (var l=0; l<string.length;l++){
      if(arr[k]===string.charAt(l)){
        contador++;
      }
    }
    rpta[k]=contador;
  }
  var final=new Object();
  for(var i=0; i<rpta.length;i++){
    final[arr[i]]=rpta[i];
  }
  return final;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var patron='';
  var minu='';
  var rpta='';
  for (let i=0;i<s.length;i++){
    patron=s.charAt(i).toUpperCase();
    if(s.charAt(i)===patron){
      rpta+=s.charAt(i);
    }else{
      minu+=s.charAt(i);
    }
  }
  return rpta+minu;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var rpta="";
  var local="";
  for(var i=0;i<str.length;i++){
    if(i===str.length - 1){
      local+=str.charAt(i);
    }
    if(str.charAt(i)===' ' || i===str.length - 1){
      for(let j=local.length+1;j>=0;j--){
        rpta+=local.charAt(j);
      }
      if(i!=str.length-1){
        rpta+=' ';
      }      
      local='';
    }else{
      local+=str.charAt(i);
    }
  }
  return rpta;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  var numeroCad=numero.toString();
  var tamanio=numeroCad.length-1;
  var contador=0;
  
  for(var i=0; i<(numeroCad.length)/2;i++){
    if(numeroCad.charAt(i)!==numeroCad.charAt(tamanio-i)){
      contador++;
    }
  }
  if(contador!==0){
    return 'No es capicua';
  }
  return 'Es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCad='';
  var cadFinal='';
  nuevaCad=cadena.replace('a','');
  cadFinal= nuevaCad.replace('b','');
  nuevaCad=cadFinal.replace('c','');
  return nuevaCad;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var aux='';
  for (var i=1; i<arr.length;i++){
    for(var j=0; j<arr.length-1;j++){
      if(arr[i].length<arr[j].length){
        aux=arr[i];
        arr[i]=arr[j];
        arr[j]=aux;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var rpta=[];
  for(var i=0; i<arreglo1.length;i++){
    for(var j=0;j<arreglo2.length;j++){
      if(arreglo1[i]===arreglo2[j]){
        rpta[rpta.length]=arreglo1[i];
      }
    }
  }
  return rpta;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

