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
  "body": " Divisibilidad    Sean y enteros, con . Decimos que divide a si existe un entero tal que . Se escribe .      Como , se cumple . En cambio, no divide a , porque no existe un entero para el cual .      Sean , con . Se cumplen las siguientes propiedades:    Si y , entonces .    Si y , entonces .    Si y , entonces .    Si y , entonces .      En cada caso, asumimos las hipótesis correspondientes.    Existen tales que y . Así, , luego .    Existen tales que y . Entonces Como , se tiene .    Por la antisimetría del orden, .    Escribimos , con . Como , y . Por tanto, .       Algoritmo de la división   Sean , con . Existen únicos tales que y .    Consideremos el conjunto . Este conjunto no es vacío, pues por la propiedad arquimediana existe tal que . Por el principio del buen orden, tiene un elemento mínimo para algún . Así, y . Además, , pues, si , entonces , pero , lo cual contradice la minimalidad de .  Si , entonces , y tomando obtenemos . Si , entonces , y tomando obtenemos . Por tanto, en ambos casos existe una representación , donde .  Para probar la unicidad, supongamos que existen tales que y , con . Al restar ambas representaciones, obtenemos . Como , se tiene . Si , entonces y, por tanto, , lo cual contradice . En consecuencia, . Sustituyendo en la igualdad anterior, obtenemos . Por tanto, la representación es única.      El máximo común divisor de dos enteros y , no ambos cero, es el entero positivo que satisface las siguientes propiedades:  1. y .  2. Si y , entonces .  Se denota por .    El siguiente teorema nos ayudará en la construcción del máximo común divisor de dos enteros.    Sean , no ambos cero. Existen enteros tales que .    Sea . Como alguno de o es distinto de cero, existe una combinación entera positiva de ambos, así que no es vacío. Por el principio del buen orden, tiene un elemento mínimo para algunos .  Aplicamos el algoritmo de la división a y . Existen tales que y . Entonces , por lo que es una combinación entera de y . Si , entonces y , en contradicción con la minimalidad de . Por tanto, y .  De manera análoga, al dividir entre , el residuo también es una combinación entera de y . La misma minimalidad implica que dicho residuo es cero, así que . Finalmente, si y , entonces . Como , satisface las propiedades de la definición del máximo común divisor.    "
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
  "body": "  Sean , con . Se cumplen las siguientes propiedades:    Si y , entonces .    Si y , entonces .    Si y , entonces .    Si y , entonces .      En cada caso, asumimos las hipótesis correspondientes.    Existen tales que y . Así, , luego .    Existen tales que y . Entonces Como , se tiene .    Por la antisimetría del orden, .    Escribimos , con . Como , y . Por tanto, .     "
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
  "body": " Congruencia modulo n    Sean y sea un entero positivo. Decimos que es congruente con módulo si . Escribimos .      Como , se cumple . En cambio, , pues no divide a .     (La congruencia es una relación de equivalencia)   La relación de congruencia modulo es una relación de equivalencia en . Es decir, para cualesquiera :     (reflexividad).    Si , entonces (simetría).    Si y , entonces (transitividad).        Como , se tiene . Por la definición de congruencia, .    Supongamos que . Entonces , así que existe tal que . Por tanto, . Como , , y por la definición de congruencia, .    Supongamos que y . Existen tales que y . Al sumar estas igualdades, obtenemos . Como , , y por tanto .        El conjunto de todas las clases de equivalencia de la relación de congruencia módulo se denota por .      El conjunto .    Note que , ya que contiene todas las clases de equivalencia módulo .  Sea . Por el algoritmo de la división, existen , con , tales que Así, , luego y . Por tanto, , lo que prueba la igualdad.    "
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
  "body": "  El conjunto .    Note que , ya que contiene todas las clases de equivalencia módulo .  Sea . Por el algoritmo de la división, existen , con , tales que Así, , luego y . Por tanto, , lo que prueba la igualdad.   "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Sección",
  "number": "2.1",
  "title": "Grupos",
  "body": " Grupos    Un grupo es un conjunto no vacío junto con una operación que satisface las siguientes propiedades:     Cerradura: si , entonces .     Asociatividad: para cualesquiera , .     Elemento identidad: existe tal que, para todo , .     Inversos: para cada existe tal que .        El conjunto de los enteros es un grupo.    La suma de dos enteros es un entero, así que se cumple la cerradura. La suma es asociativa: para cualesquiera , . El elemento identidad es , pues . Finalmente, el inverso de cada es , ya que .      El conjunto de los números racionales es un grupo.      Los números naturales con la suma no forman un grupo: por ejemplo, no tiene un inverso aditivo que también sea un número natural.      Si para todo , decimos que el grupo es abeliano o conmutativo .      Si y son grupos, entonces el conjunto con la operación es un grupo.    Sean .   Como y son grupos, se tiene: Por tanto,    Como las operaciones de y son asociativas:    Sean y los elementos identidad de sus respectivos grupos. Entonces: Análogamente, Por tanto, es el elemento identidad de .   Como y son grupos, existen y . Entonces: Análogamente, Por tanto, es el inverso de .  En conclusión, satisface los cuatro axiomas de grupo. Por tanto, es un grupo.      Sean y grupos. Si y son abelianos, entonces también es abeliano.    Sean . Entonces, e , donde y .     Por tanto, es abeliano.    "
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
  "body": "  Si y son grupos, entonces el conjunto con la operación es un grupo.    Sean .   Como y son grupos, se tiene: Por tanto,    Como las operaciones de y son asociativas:    Sean y los elementos identidad de sus respectivos grupos. Entonces: Análogamente, Por tanto, es el elemento identidad de .   Como y son grupos, existen y . Entonces: Análogamente, Por tanto, es el inverso de .  En conclusión, satisface los cuatro axiomas de grupo. Por tanto, es un grupo.   "
},
{
  "id": "thm-producto-abeliano",
  "level": "2",
  "url": "sec-section-name.html#thm-producto-abeliano",
  "type": "Teorema",
  "number": "2.1.7",
  "title": "",
  "body": "  Sean y grupos. Si y son abelianos, entonces también es abeliano.    Sean . Entonces, e , donde y .     Por tanto, es abeliano.   "
},
{
  "id": "clases-laterales",
  "level": "1",
  "url": "clases-laterales.html",
  "type": "Sección",
  "number": "2.2",
  "title": "Clases laterales",
  "body": " Clases laterales    Sea un grupo y . Para , decimos que es congruente con módulo si , y lo denotamos por .    Probemos que esta relación es una relación de equivalencia.    Sea un grupo, y . La clase lateral izquierda de respecto a es el conjunto (en notación aditiva, ).      Sea un grupo, y . Si , entonces .    Supongamos que . Si , entonces para algún . Como es un subgrupo, . Por tanto, .  Recíprocamente, si , entonces y . Así, . Concluimos que .      En el grupo aditivo , consideremos el subgrupo y el elemento . Al sumar módulo , obtenemos   En la figura, los elementos de están resaltados en azul. Las flechas representan sumar módulo : los elementos cambian de posición, pero el conjunto sigue siendo .   Sumar módulo lleva los elementos de a elementos del mismo subgrupo.   Los seis elementos de Z6 aparecen en un círculo. Los elementos 0, 2 y 4 están resaltados en azul y unidos por flechas que forman el ciclo 0 a 2, 2 a 4 y 4 a 0.         Sea un grupo y . El conjunto de clases laterales izquierdas forma una partición de .    Como , todo pertenece a su clase: . Así, las clases son no vacías y cubren .  Supongamos que . Tomemos . Entonces   De aquí, y . Para cada ,   Así, y , luego . Por tanto, las clases distintas son disjuntas y forman una partición de .    Si es finito, hay un número finito de clases laterales distintas. Las escribimos como . Entonces    Las clases laterales distintas son las partes de una partición de .   Esquema de un grupo finito G como una figura de contorno irregular dividida en regiones disjuntas, rotuladas a1H, a2H, puntos suspensivos y akH. Los puntos dentro de las regiones representan elementos del grupo.       Para en , las únicas clases laterales distintas son y . La partición es   donde indica una unión de conjuntos disjuntos.     Teorema de Lagrange   Sea un grupo finito y . Entonces el orden de divide al orden de , es decir, .    Sea . Consideremos la función   Esta función es biyectiva: es sobreyectiva por la definición de e inyectiva porque implica . Por tanto, .  Como es finito, sus clases laterales distintas son . Por la ,   Al ser una unión disjunta,   Por tanto, .    "
},
{
  "id": "def-congruencia-modulo-subgrupo",
  "level": "2",
  "url": "clases-laterales.html#def-congruencia-modulo-subgrupo",
  "type": "Definición",
  "number": "2.2.1",
  "title": "",
  "body": "  Sea un grupo y . Para , decimos que es congruente con módulo si , y lo denotamos por .   "
},
{
  "id": "def-clase-lateral-izquierda",
  "level": "2",
  "url": "clases-laterales.html#def-clase-lateral-izquierda",
  "type": "Definición",
  "number": "2.2.2",
  "title": "",
  "body": "  Sea un grupo, y . La clase lateral izquierda de respecto a es el conjunto (en notación aditiva, ).   "
},
{
  "id": "prop-clase-lateral-igual-subgrupo",
  "level": "2",
  "url": "clases-laterales.html#prop-clase-lateral-igual-subgrupo",
  "type": "Proposición",
  "number": "2.2.3",
  "title": "",
  "body": "  Sea un grupo, y . Si , entonces .    Supongamos que . Si , entonces para algún . Como es un subgrupo, . Por tanto, .  Recíprocamente, si , entonces y . Así, . Concluimos que .   "
},
{
  "id": "ejemplo-clase-lateral-Z6",
  "level": "2",
  "url": "clases-laterales.html#ejemplo-clase-lateral-Z6",
  "type": "Ejemplo",
  "number": "2.2.4",
  "title": "",
  "body": "  En el grupo aditivo , consideremos el subgrupo y el elemento . Al sumar módulo , obtenemos   En la figura, los elementos de están resaltados en azul. Las flechas representan sumar módulo : los elementos cambian de posición, pero el conjunto sigue siendo .   Sumar módulo lleva los elementos de a elementos del mismo subgrupo.   Los seis elementos de Z6 aparecen en un círculo. Los elementos 0, 2 y 4 están resaltados en azul y unidos por flechas que forman el ciclo 0 a 2, 2 a 4 y 4 a 0.      "
},
{
  "id": "prop-clases-laterales-particion",
  "level": "2",
  "url": "clases-laterales.html#prop-clases-laterales-particion",
  "type": "Proposición",
  "number": "2.2.6",
  "title": "",
  "body": "  Sea un grupo y . El conjunto de clases laterales izquierdas forma una partición de .    Como , todo pertenece a su clase: . Así, las clases son no vacías y cubren .  Supongamos que . Tomemos . Entonces   De aquí, y . Para cada ,   Así, y , luego . Por tanto, las clases distintas son disjuntas y forman una partición de .   "
},
{
  "id": "fig-particion-clases-laterales",
  "level": "2",
  "url": "clases-laterales.html#fig-particion-clases-laterales",
  "type": "Figura",
  "number": "2.2.7",
  "title": "",
  "body": " Las clases laterales distintas son las partes de una partición de .   Esquema de un grupo finito G como una figura de contorno irregular dividida en regiones disjuntas, rotuladas a1H, a2H, puntos suspensivos y akH. Los puntos dentro de las regiones representan elementos del grupo.    "
},
{
  "id": "ejemplo-particion-Z6",
  "level": "2",
  "url": "clases-laterales.html#ejemplo-particion-Z6",
  "type": "Ejemplo",
  "number": "2.2.8",
  "title": "",
  "body": "  Para en , las únicas clases laterales distintas son y . La partición es   donde indica una unión de conjuntos disjuntos.   "
},
{
  "id": "thm-lagrange",
  "level": "2",
  "url": "clases-laterales.html#thm-lagrange",
  "type": "Teorema",
  "number": "2.2.9",
  "title": "Teorema de Lagrange.",
  "body": " Teorema de Lagrange   Sea un grupo finito y . Entonces el orden de divide al orden de , es decir, .    Sea . Consideremos la función   Esta función es biyectiva: es sobreyectiva por la definición de e inyectiva porque implica . Por tanto, .  Como es finito, sus clases laterales distintas son . Por la ,   Al ser una unión disjunta,   Por tanto, .   "
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
