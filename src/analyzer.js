const analyzer = {
  getWordCount: ( text ) => {

    if (text.trim() === '') {
      return 0;
    }
    // TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const dividirPalabras=text.trim().split (/\s/g);
    const palabrasSeparadas= dividirPalabras.filter(word => !/\d/.test(word));
    const numeroPalabras = palabrasSeparadas.length

    return numeroPalabras;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const caracteres = text.length;
  
    return caracteres;
    
  },

  getCharacterCountExcludingSpaces:(text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const caracteresSinespacio=text.replace (/\s/g,"")
    const caracteresSinpuntuacion =caracteresSinespacio.replace(/[.,;:]/g,"")
    const caracteresFiltrados =caracteresSinpuntuacion.length;

    return caracteresFiltrados;

  },
  getAverageWordLength:(text) => {    
    //Toda esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
    const divisionPalabras=text.split(/\s+/g)
    const filtrarnumeros = divisionPalabras.filter(word => !/\d/.test(word))
    const palabrasCantidad = filtrarnumeros.length
  
    if(palabrasCantidad === 0){return 0
    }
  
    //longitud palabras
    let longitudTotal= 0
  
    for (let i=0;i <palabrasCantidad; i++) {
      const palabra=filtrarnumeros[i]
      const limpiarpalabras=palabra.replace(/[.,;:]/g,"")
  
      const LongitudPalabras=limpiarpalabras.length;
      longitudTotal = longitudTotal + LongitudPalabras;
    }
      
     const promedioPalabras= longitudTotal/palabrasCantidad;
    return promedioPalabras;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
   

    const filtrarNumeros= text.match (/[0-9]/g)
    const  numerosEncontrados= filtrarNumeros ? filtrarNumeros.length:0
    return numerosEncontrados
  },

  getNumberSum:(text) => {

    const buscarNumeros = text.match(/[+-]?\d+(\.\d+)?/g);
    
    if (!buscarNumeros || buscarNumeros.length ===0) {
      return 0;
    }
   
    let sumaNumeros= 0;  
          
    for (let i= 0;i < buscarNumeros.length;i++){
      sumaNumeros = sumaNumeros+parseFloat(buscarNumeros[i]);
   }
   return sumaNumeros;
  },  

}

export default analyzer;
