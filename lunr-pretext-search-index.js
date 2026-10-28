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
  "body": " Divisibilidad    Sean y enteros, con . Decimos que divide a si existe un entero tal que . Se escribe .      Como , se cumple . En cambio, no divide a , porque no existe un entero para el cual .      Sean , con . Se cumplen las siguientes propiedades:    Si y , entonces .    Si y , entonces .    Si y , entonces .    Si y , entonces .        Como , existe tal que . Como , existe tal que . Por tanto, . Puesto que , implica que .    De y existen tales que y . Entonces . Como , se concluye que .    Los números y son enteros no negativos. La propiedad antisimétrica del orden dice que si cada uno es menor o igual que el otro, entonces son iguales. Por tanto, .    Como , existe tal que . Puesto que , se tiene , así que . Luego , y por tanto .       Algoritmo de la división   Sean , con . Existen únicos tales que y .    Consideremos el conjunto . Este conjunto no es vacío, pues por la propiedad arquimediana existe tal que . Por el principio del buen orden, tiene un elemento mínimo para algún . Así, y . Además, , pues, si , entonces , pero , lo cual contradice la minimalidad de .  Si , entonces , y tomando obtenemos . Si , entonces , y tomando obtenemos . Por tanto, en ambos casos existe una representación , donde .  Para probar la unicidad, supongamos que existen tales que y , con . Al restar ambas representaciones, obtenemos . Como , se tiene . Si , entonces y, por tanto, , lo cual contradice . En consecuencia, . Sustituyendo en la igualdad anterior, obtenemos . Por tanto, la representación es única.    "
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
  "id": "numeros-primos",
  "level": "1",
  "url": "numeros-primos.html",
  "type": "Sección",
  "number": "1.2",
  "title": "Números primos",
  "body": " Números primos    Un entero es primo si sus únicos divisores positivos son y . Si tiene otros divisores positivos, se llama compuesto.      El número es primo: sus únicos divisores positivos son y . El número es compuesto, porque y .    "
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
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Sección",
  "number": "2.1",
  "title": "Definición y primeros ejemplos",
  "body": " Definición y primeros ejemplos    Un grupo es un conjunto no vacío junto con una operación que satisface las siguientes propiedades:     Cerradura: si , entonces .     Asociatividad: para cualesquiera , .     Elemento identidad: existe tal que, para todo , .     Inversos: para cada existe tal que .        Los enteros con la operación de suma forman un grupo. La identidad es y el inverso de es .      Los números naturales con la suma no forman un grupo: por ejemplo, no tiene un inverso aditivo que también sea un número natural.    "
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
  "body": "  Los enteros con la operación de suma forman un grupo. La identidad es y el inverso de es .   "
},
{
  "id": "ejemplo-naturales-suma",
  "level": "2",
  "url": "sec-section-name.html#ejemplo-naturales-suma",
  "type": "Ejemplo",
  "number": "2.1.3",
  "title": "",
  "body": "  Los números naturales con la suma no forman un grupo: por ejemplo, no tiene un inverso aditivo que también sea un número natural.   "
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
