const livros = require('./lista-livros.js');
const menorValor = require('./menorValor.js');

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log('posição atual', atual)
    console.log("livro atual", livros[atual]);
    let livroMenoPreco = livros[menor];
    console.log('livro menor preço', livros[menor])

    livros[atual] = livroMenoPreco;
    livros[menor] = livroAtual;
};

console.log(livros);