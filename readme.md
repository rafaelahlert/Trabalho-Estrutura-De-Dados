# Biblioteca com funções matemáticas para o dia-a-dia

     Tem o intuito de facilitar a vida dos usuários, automatizando tarefas e cálculos necessários na
     rotina de cada um.

## Transforma Quilômetros em metros e metros em centímetros
    Muitas pessoas tem dificuldade em trasformação de grandezas, essa função automatiza isto.
    Basta a pessoa entrar com o parâmetro que irá informar os quilômetros e a função faz o resto.

````js
function km(a) {
        var metros = a*1000
        var cm = metros*100

        console.log("Em metros: " + metros + " m" + ". Em centímetros: " + cm + " cm.")
}

km(20)

````

## Transforma polegadas em centímetros
    
### Uma breve introdução do que são polegadas:
    São apenas unidades de comprimentos utilizadas no sistema imperial, muito presentes no cotidiano, como referencial da tela de televisões e monitores. Uma polegada refere-se a 2,54 centímetros.

    Então o usuário basta entre com o parâmentro informando quantas polegdas são que a função tratará de calcular o resultado. 

```` js
function polegadas(a) {
    var b = a*2.54
    console.log(b + "cm")  
}
polegadas(5)

 ````

## Porcentagem
    Comum recebermos e vermos por ai propagandas indicando desconto em determinado local utilizando porcentagem.
    Também temos aqueles juros cobrados quando devemos que também são idicados por porcentagem.

### Exemplos:
    "Todo o estoque da loja com 20% de desconto"
    "Juros de 10% ao ano"

    Mas como calcular?
    Com a ajuda da nossa função é simples, basta serem inseridos em parâmetros, nesta exata ordem, o valor do produto, o tipo ("desconto" ou "juros") e por fim a porcentagem, o programa irá lhe devolver o valor final do produto. 

```` js

function porcentagem (valor, tipo, porcento) {
    if(tipo == "desconto") 
    {
        var total = valor * (porcento/100)
        var final = valor-total
    }   
    else if (tipo == "juros")
    {
        var total = valor * (porcento/100) 
        var final = valor + total
    }
    console.log(final)
}

porcentagem(150,"desconto", 20)

````


## Consumo de um carro
    Quando vamos comprar um carro sempre saímos em busca de um carro mais econômico e que caiba no orçamento, para isso é necessário calcular a quantidade de litros de combustivel gasto pelo carro em determinado percurso, funciona assim: 

    Você precisa indicar a quantidade de quilômetros rodados e a quantidade de combustível colocado no tanque do carro para o trajeto, os indicando como parâmetros.

```` js

function gasto(km, litros) {
    var media = km*litros
    console.log("O consumo Médio do carro é: " + media + "km/litro")    
}

gasto(50,50)

````

## A vírgula
    Quando vamos resolver alguns problemas matemáticos nos deparamos com aquela situação chata de como deslocar a vírgula de uma casa pra outra quantas vezes forem necessárias. Essa função trata exatamente disso, como parâmetro você vai entrar com o número e com a quantidade casas para serem saltadas sa seguinte forma:

    1 casa - 10
    2 casas - 100
    3 casas - 1000
    ... e assim por diante

```` js

function virgula(x, y) {
    var res = x*y
    console.log(res)
}

virgula(25.6, 10)

````



## Produzida por:
    Rafaela Ahlert
    Moisés França
    João Pedro França
    Lucas Minghini
    Wallison Moreira 