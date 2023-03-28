function mediaPonderada(listaValores, listaPesos) {
    //escreva seu código aqui :)
    let total;
    let total2;
    for (let i = 0; i < listaValores; i++) {
       total = listaValores[i] * listaPesos[i]
       total2 += listaPesos[i]
       return total / total2
    }
}

console.log(mediaPonderada([5, 8, 10], [1, 2, 3]))