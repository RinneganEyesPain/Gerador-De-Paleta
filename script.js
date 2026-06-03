const btnGerar = document.getElementById('btn-gerar');
const paleta = document.getElementById('paleta');
const mensagem = document.getElementById('mensagem');

function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        let posicaoAleatoria = Math.floor(Math.random() * 16);
        cor += letras[posicaoAleatoria];
    }
    return cor;
}

function gerarPaleta() {
    paleta.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const cor = gerarCorAleatoria();

        const card = document.createElement('div');
        card.classList.add('cor-card');
        card.style.backgroundColor = cor;

        const hex = document.createElement('span');
        hex.classList.add('cor-hex');
        hex.textContent = cor;

        card.appendChild(hex);

        card.addEventListener('click', function() {
            navigator.clipboard.writeText(cor);
            mensagem.textContent = `✅ Cor ${cor} copiada!`;
            setTimeout(function() {
                mensagem.textContent = '';
            }, 2000);
        });

        paleta.appendChild(card);
    }
}  // ← fecha a função aqui

btnGerar.addEventListener('click', gerarPaleta);  // ← fora da função
gerarPaleta();                                     // ← fora da função