// Seleciona os elementos da página
const nomeHeroiInput = document.getElementById('nomeHeroi');
const xpHeroiInput = document.getElementById('xpHeroi');
const resultado = document.getElementById('resultado');
const somClick = new Audio('src/assets/sounds/click.mp3'); // Carrega o som
const videoContainer = document.getElementById('videoContainer');

// Classificação de nível com base no XP e troca de imagem de fundo
const classificarNivel = (xp) => {
    let nivel;
    if (xp < 1000) {
        nivel = 'Ferro';
        document.body.style.backgroundImage = "url('src/assets/images/nivel1.jpg')";
    } else if (xp <= 2000) {
        nivel = 'Bronze';
        document.body.style.backgroundImage = "url('src/assets/images/nivel2.jpg')";
    } else if (xp <= 5000) {
        nivel = 'Prata';
        document.body.style.backgroundImage = "url('src/assets/images/nivel3.jpg')";
    } else if (xp <= 7000) {
        nivel = 'Ouro';
        document.body.style.backgroundImage = "url('src/assets/images/nivel4.jpg')";
    } else if (xp <= 8000) {
        nivel = 'Platina';
        document.body.style.backgroundImage = "url('src/assets/images/nivel5.jpg')";
    } else if (xp <= 9000) {
        nivel = 'Ascendente';
        document.body.style.backgroundImage = "url('src/assets/images/nivel6.jpg')";
    } else if (xp <= 10000) {
        nivel = 'Imortal';
        document.body.style.backgroundImage = "url('src/assets/images/nivel7.jpg')";
    } else {
        nivel = 'Radiante';
        document.body.style.backgroundImage = "url('src/assets/images/nivel8.jpg')";
    }
    return nivel;
};

// Função para classificar o herói, exibir o resultado e ocultar o vídeo
const classificarHeroi = () => {
    const nome = nomeHeroiInput.value;
    const xp = Number(xpHeroiInput.value);

    // Reproduz o som e oculta o vídeo
    somClick.play();
    videoContainer.classList.add('hidden');

    // Remove a classe de fundo preto quando o vídeo é ocultado
    document.body.classList.remove('video-page');

    // Exibe o resultado e troca a imagem de fundo
    resultado.textContent = `O Herói de nome ${nome} está no nível de ${classificarNivel(xp)}`;
};

// Adiciona a classe de fundo preto ao body quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('video-page');
});

// Adiciona o evento de clique ao botão
document.getElementById('classificarBtn').addEventListener('click', classificarHeroi);
