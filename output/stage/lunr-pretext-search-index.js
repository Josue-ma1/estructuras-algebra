var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colofón",
  "number": "",
  "title": "Colofón",
  "body": "  "
},
{
  "id": "divisibilidad",
  "level": "1",
  "url": "divisibilidad.html",
  "type": "Sección",
  "number": "1.1",
  "title": "Divisibilidad",
  "body": " Divisibilidad    Sean y enteros, con . Decimos que divide a si existe un entero tal que . Se escribe .      Como , se cumple . En cambio, no divide a , porque no existe un entero para el cual .      Sean , con . Se cumplen las siguientes propiedades:    Si y , entonces .    Si y , entonces .    Si y , entonces .    Si y , entonces .        Como , existe tal que . Como , existe tal que . Por tanto, . Puesto que , implica que .    De y existen tales que y . Entonces . Como , se concluye que .    Los números y son enteros no negativos. La propiedad antisimétrica del orden dice que si cada uno es menor o igual que el otro, entonces son iguales. Por tanto, .    Como , existe tal que . Puesto que , se tiene , así que . Luego , y por tanto .       Algoritmo de la división   Sean , con . Existen únicos tales que y .    Consideremos el conjunto . Este conjunto no es vacío, pues por la propiedad arquimediana existe tal que . Por el principio del buen orden, tiene un elemento mínimo para algún . Así, y . Además, , pues, si , entonces , pero , lo cual contradice la minimalidad de .  Si , entonces , y tomando obtenemos . Si , entonces , y tomando obtenemos . Por tanto, en ambos casos existe una representación , donde .  Para probar la unicidad, supongamos que existen tales que y , con . Al restar ambas representaciones, obtenemos . Como , se tiene . Si , entonces y, por tanto, , lo cual contradice . En consecuencia, . Sustituyendo en la igualdad anterior, obtenemos . Por tanto, la representación es única.      El máximo común divisor de dos enteros y , no ambos cero, es el entero positivo que satisface las siguientes propiedades:  1. y .  2. Si y , entonces .  Se denota por .    El siguiente teorema nos ayudará en la construcción del máximo común divisor de dos enteros.    Sean , no ambos cero. Existen enteros tales que .    Sea . Como alguno de o es distinto de cero, existe una combinación entera positiva de ambos, así que no es vacío. Por el principio del buen orden, tiene un elemento mínimo para algunos .  Aplicamos el algoritmo de la división a y . Existen tales que y . Entonces , por lo que es una combinación entera de y . Si , entonces y , en contradicción con la minimalidad de . Por tanto, y .  De manera análoga, al dividir entre , el residuo también es una combinación entera de y . La misma minimalidad implica que dicho residuo es cero, así que . Finalmente, si y , entonces . Como , satisface las propiedades de la definición del máximo común divisor.    "
},
{
  "id": "def-divisibilidad",
  "level": "2",
  "url": "divisibilidad.html#def-divisibilidad",
  "type": "Definición",
  "number": "1.1.1",
  "title": "",
  "body": "  Sean y enteros, con . Decimos que divide a si existe un entero tal que . Se escribe .   "
},
{
  "id": "ejemplo-divisibilidad",
  "level": "2",
  "url": "divisibilidad.html#ejemplo-divisibilidad",
  "type": "Ejemplo",
  "number": "1.1.2",
  "title": "",
  "body": "  Como , se cumple . En cambio, no divide a , porque no existe un entero para el cual .   "
},
{
  "id": "propiedades-divisibilidad",
  "level": "2",
  "url": "divisibilidad.html#propiedades-divisibilidad",
  "type": "Proposición",
  "number": "1.1.3",
  "title": "",
  "body": "  Sean , con . Se cumplen las siguientes propiedades:    Si y , entonces .    Si y , entonces .    Si y , entonces .    Si y , entonces .        Como , existe tal que . Como , existe tal que . Por tanto, . Puesto que , implica que .    De y existen tales que y . Entonces . Como , se concluye que .    Los números y son enteros no negativos. La propiedad antisimétrica del orden dice que si cada uno es menor o igual que el otro, entonces son iguales. Por tanto, .    Como , existe tal que . Puesto que , se tiene , así que . Luego , y por tanto .     "
},
{
  "id": "algoritmo-de-la-division",
  "level": "2",
  "url": "divisibilidad.html#algoritmo-de-la-division",
  "type": "Teorema",
  "number": "1.1.4",
  "title": "Algoritmo de la división.",
  "body": " Algoritmo de la división   Sean , con . Existen únicos tales que y .    Consideremos el conjunto . Este conjunto no es vacío, pues por la propiedad arquimediana existe tal que . Por el principio del buen orden, tiene un elemento mínimo para algún . Así, y . Además, , pues, si , entonces , pero , lo cual contradice la minimalidad de .  Si , entonces , y tomando obtenemos . Si , entonces , y tomando obtenemos . Por tanto, en ambos casos existe una representación , donde .  Para probar la unicidad, supongamos que existen tales que y , con . Al restar ambas representaciones, obtenemos . Como , se tiene . Si , entonces y, por tanto, , lo cual contradice . En consecuencia, . Sustituyendo en la igualdad anterior, obtenemos . Por tanto, la representación es única.   "
},
{
  "id": "def-mcd",
  "level": "2",
  "url": "divisibilidad.html#def-mcd",
  "type": "Definición",
  "number": "1.1.5",
  "title": "",
  "body": "  El máximo común divisor de dos enteros y , no ambos cero, es el entero positivo que satisface las siguientes propiedades:  1. y .  2. Si y , entonces .  Se denota por .   "
},
{
  "id": "teorema-mcd",
  "level": "2",
  "url": "divisibilidad.html#teorema-mcd",
  "type": "Teorema",
  "number": "1.1.6",
  "title": "",
  "body": "  Sean , no ambos cero. Existen enteros tales que .    Sea . Como alguno de o es distinto de cero, existe una combinación entera positiva de ambos, así que no es vacío. Por el principio del buen orden, tiene un elemento mínimo para algunos .  Aplicamos el algoritmo de la división a y . Existen tales que y . Entonces , por lo que es una combinación entera de y . Si , entonces y , en contradicción con la minimalidad de . Por tanto, y .  De manera análoga, al dividir entre , el residuo también es una combinación entera de y . La misma minimalidad implica que dicho residuo es cero, así que . Finalmente, si y , entonces . Como , satisface las propiedades de la definición del máximo común divisor.   "
},
{
  "id": "numeros-primos",
  "level": "1",
  "url": "numeros-primos.html",
  "type": "Sección",
  "number": "1.2",
  "title": "Números primos",
  "body": " Números primos    Un entero es primo si sus únicos divisores positivos son y . Si tiene otros divisores positivos, se llama compuesto.      El número es primo: sus únicos divisores positivos son y . El número es compuesto, porque y .      Sean y enteros mayores que . Decimos que y son primos relativos si . En otras palabras, no tienen divisores positivos en común, excepto .    "
},
{
  "id": "def-numero-primo",
  "level": "2",
  "url": "numeros-primos.html#def-numero-primo",
  "type": "Definición",
  "number": "1.2.1",
  "title": "",
  "body": "  Un entero es primo si sus únicos divisores positivos son y . Si tiene otros divisores positivos, se llama compuesto.   "
},
{
  "id": "ejemplo-primos",
  "level": "2",
  "url": "numeros-primos.html#ejemplo-primos",
  "type": "Ejemplo",
  "number": "1.2.2",
  "title": "",
  "body": "  El número es primo: sus únicos divisores positivos son y . El número es compuesto, porque y .   "
},
{
  "id": "teorema-primos",
  "level": "2",
  "url": "numeros-primos.html#teorema-primos",
  "type": "Teorema",
  "number": "1.2.3",
  "title": "",
  "body": "  Sean y enteros mayores que . Decimos que y son primos relativos si . En otras palabras, no tienen divisores positivos en común, excepto .   "
},
{
  "id": "congruencia",
  "level": "1",
  "url": "congruencia.html",
  "type": "Sección",
  "number": "1.3",
  "title": "Congruencia modulo n",
  "body": " Congruencia modulo n    Sean y sea un entero positivo. Decimos que es congruente con módulo si . Escribimos .      Como , se cumple . En cambio, , pues no divide a .     (La congruencia es una relación de equivalencia)   La relación de congruencia modulo es una relación de equivalencia en . Es decir, para cualesquiera :     (reflexividad).    Si , entonces (simetría).    Si y , entonces (transitividad).        Como , se tiene . Por la definición de congruencia, .    Supongamos que . Entonces , así que existe tal que . Por tanto, . Como , , y por la definición de congruencia, .    Supongamos que y . Existen tales que y . Al sumar estas igualdades, obtenemos . Como , , y por tanto .        El conjunto de todas las clases de equivalencia de la relación de congruencia módulo se denota por .      El conjunto .    Sea . Por el algoritmo de la división, existen enteros con tales que . Entonces , así que , y por la definición de congruencia, . Por lo tanto, cada clase de equivalencia es igual a una de las clases .    "
},
{
  "id": "def-congruencia",
  "level": "2",
  "url": "congruencia.html#def-congruencia",
  "type": "Definición",
  "number": "1.3.1",
  "title": "",
  "body": "  Sean y sea un entero positivo. Decimos que es congruente con módulo si . Escribimos .   "
},
{
  "id": "ejemplo-congruencia",
  "level": "2",
  "url": "congruencia.html#ejemplo-congruencia",
  "type": "Ejemplo",
  "number": "1.3.2",
  "title": "",
  "body": "  Como , se cumple . En cambio, , pues no divide a .   "
},
{
  "id": "congruencia-es-relacion-de-equivalencia",
  "level": "2",
  "url": "congruencia.html#congruencia-es-relacion-de-equivalencia",
  "type": "Proposición",
  "number": "1.3.3",
  "title": "(La congruencia es una relación de equivalencia).",
  "body": " (La congruencia es una relación de equivalencia)   La relación de congruencia modulo es una relación de equivalencia en . Es decir, para cualesquiera :     (reflexividad).    Si , entonces (simetría).    Si y , entonces (transitividad).        Como , se tiene . Por la definición de congruencia, .    Supongamos que . Entonces , así que existe tal que . Por tanto, . Como , , y por la definición de congruencia, .    Supongamos que y . Existen tales que y . Al sumar estas igualdades, obtenemos . Como , , y por tanto .     "
},
{
  "id": "def-Z_n",
  "level": "2",
  "url": "congruencia.html#def-Z_n",
  "type": "Definición",
  "number": "1.3.4",
  "title": "",
  "body": "  El conjunto de todas las clases de equivalencia de la relación de congruencia módulo se denota por .   "
},
{
  "id": "thm-Z_n",
  "level": "2",
  "url": "congruencia.html#thm-Z_n",
  "type": "Teorema",
  "number": "1.3.5",
  "title": "",
  "body": "  El conjunto .    Sea . Por el algoritmo de la división, existen enteros con tales que . Entonces , así que , y por la definición de congruencia, . Por lo tanto, cada clase de equivalencia es igual a una de las clases .   "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Sección",
  "number": "2.1",
  "title": "Grupos",
  "body": " Grupos    Un grupo es un conjunto no vacío junto con una operación que satisface las siguientes propiedades:     Cerradura: si , entonces .     Asociatividad: para cualesquiera , .     Elemento identidad: existe tal que, para todo , .     Inversos: para cada existe tal que .        El conjunto de los enteros es un grupo.    La suma de dos enteros es un entero, así que se cumple la cerradura. La suma es asociativa: para cualesquiera , . El elemento identidad es , pues . Finalmente, el inverso de cada es , ya que .      El conjunto de los números racionales es un grupo.      Los números naturales con la suma no forman un grupo: por ejemplo, no tiene un inverso aditivo que también sea un número natural.      Si para todo , decimos que el grupo es abeliano o conmutativo .      Si y son grupos, entonces el conjunto con la operación es un grupo.    Sean . Demostraremos que se cumplen los cuatro axiomas de grupo.   Como y son grupos, se tiene: Por tanto,    Como las operaciones de y son asociativas:    Sean y los elementos identidad de sus respectivos grupos. Entonces: Análogamente, Por tanto, es el elemento identidad de .   Como y son grupos, existen y . Entonces: Análogamente, Por tanto, es el inverso de .  En conclusión, satisface los cuatro axiomas de grupo. Por tanto, es un grupo.    "
},
{
  "id": "def-grupo",
  "level": "2",
  "url": "sec-section-name.html#def-grupo",
  "type": "Definición",
  "number": "2.1.1",
  "title": "",
  "body": "  Un grupo es un conjunto no vacío junto con una operación que satisface las siguientes propiedades:     Cerradura: si , entonces .     Asociatividad: para cualesquiera , .     Elemento identidad: existe tal que, para todo , .     Inversos: para cada existe tal que .     "
},
{
  "id": "ejemplo-enteros-suma",
  "level": "2",
  "url": "sec-section-name.html#ejemplo-enteros-suma",
  "type": "Ejemplo",
  "number": "2.1.2",
  "title": "",
  "body": "  El conjunto de los enteros es un grupo.    La suma de dos enteros es un entero, así que se cumple la cerradura. La suma es asociativa: para cualesquiera , . El elemento identidad es , pues . Finalmente, el inverso de cada es , ya que .   "
},
{
  "id": "ejemplo-racionales-suma",
  "level": "2",
  "url": "sec-section-name.html#ejemplo-racionales-suma",
  "type": "Ejemplo",
  "number": "2.1.3",
  "title": "",
  "body": "  El conjunto de los números racionales es un grupo.   "
},
{
  "id": "ejemplo-naturales-suma",
  "level": "2",
  "url": "sec-section-name.html#ejemplo-naturales-suma",
  "type": "Ejemplo",
  "number": "2.1.4",
  "title": "",
  "body": "  Los números naturales con la suma no forman un grupo: por ejemplo, no tiene un inverso aditivo que también sea un número natural.   "
},
{
  "id": "def-subgrupo",
  "level": "2",
  "url": "sec-section-name.html#def-subgrupo",
  "type": "Definición",
  "number": "2.1.5",
  "title": "",
  "body": "  Si para todo , decimos que el grupo es abeliano o conmutativo .   "
},
{
  "id": "thm-producto-de-grupos",
  "level": "2",
  "url": "sec-section-name.html#thm-producto-de-grupos",
  "type": "Teorema",
  "number": "2.1.6",
  "title": "",
  "body": "  Si y son grupos, entonces el conjunto con la operación es un grupo.    Sean . Demostraremos que se cumplen los cuatro axiomas de grupo.   Como y son grupos, se tiene: Por tanto,    Como las operaciones de y son asociativas:    Sean y los elementos identidad de sus respectivos grupos. Entonces: Análogamente, Por tanto, es el elemento identidad de .   Como y son grupos, existen y . Entonces: Análogamente, Por tanto, es el inverso de .  En conclusión, satisface los cuatro axiomas de grupo. Por tanto, es un grupo.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colofón",
  "number": "",
  "title": "Colofón",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
