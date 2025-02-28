

let pronoum = ['me', 'the', 'your', 'our'];
let adj = ['new', 'fantastic', 'beautiful', 'amazing'];
let noum = ['house', 'car', 'dog', 'game'];
//si añadimos un nuevo array de extension de dominio no haría falta hacer un ciclo anidado por cada extension.
// valdia con hacer solo un anidado.

let extension = ['.com', '.es']


for (let i = 0; i < pronoum.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noum.length; k++) {
            for (let h = 0; h < extension.length; h++) {
                console.log('DOMAIN GENERATED: '+pronoum[i] + adj[j] + noum[k] + extension[h])
            }
        }
    }
}


/*for(let i = 0; i < pronoum.length; i++) {
    for(let j = 0; j < adj.length; j++) {
        for(let k = 0; k < noum.length; k++) {
            console.log(pronoum[i] + adj[j] + noum[k] + '.com')
        }
    }
}

for(let i = 0; i < pronoum.length; i++) {
    for(let j = 0; j < adj.length; j++) {
        for(let k = 0; k < noum.length; k++) {
            console.log(pronoum[i] + adj[j] + noum[k] + '.es')
        }
    }
}*/
