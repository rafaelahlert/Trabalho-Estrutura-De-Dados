// Função 01
function km(a) {
        var metros = a*1000
        var cm = metros*100

        console.log("Em metros: " + metros + " m" + ". Em centímetros: " + cm + " cm.")
}

km(20)

// Função 02

function polegadas(a) {
    var b = a* 2.54
    console.log(b + "cm")  
}
polegadas(5)

// Função 03

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


// Função 04

function gasto(km, litros) {
    var media = km*litros
    console.log("O consumo Médio do carro é: " + media + "km/litro")    
}

gasto(50,50)

// Função 05

function virgula(x, y) {
    var res = x*y
    console.log(res)
}

virgula(25.6, 10)