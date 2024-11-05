// Seleciona os elementos da página
const nomeHeroiInput = document.getElementById('nomeHeroi');
const xpHeroiInput = document.getElementById('xpHeroi');
const resultado = document.getElementById('resultado');
const imgPersonagem = document.getElementById('imagemHeroi'); // Seleciona a imagem do herói
const somClick = new Audio('src/assets/sounds/click.mp3'); // Carrega o som

// Classificação de nível com base no XP
const classificarNivel = xp => 
    xp < 1000 ? 'Ferro' :
    xp <= 2000 ? 'Bronze' :
    xp <= 5000 ? 'Prata' :
    xp <= 7000 ? 'Ouro' :
    xp <= 8000 ? 'Platina' :
    xp <= 9000 ? 'Ascendente' :
    xp <= 10000 ? 'Imortal' : 'Radiante';

// Função para atualizar a imagem do herói com base no nível
const atualizarImagemHeroi = nivel => {
    imgPersonagem.src = `src/assets/images/nivel${nivel}.jpg`; // Atualiza a imagem
};

// Função para classificar o herói e exibir o resultado
const classificarHeroi = () => {
    const nome = nomeHeroiInput.value;
    const xp = Number(xpHeroiInput.value);

    // Classifica o nível do herói
    const nivel = classificarNivel(xp);

    // Reproduz o som
    somClick.play();

    // Exibe a mensagem do resultado
    resultado.textContent = `O Herói de nome ${nome} está no nível de ${nivel}`;

    // Atualiza a imagem do herói com base no XP
    let imgNivel;
    if (xp < 1000) imgNivel = 1;
    else if (xp <= 2000) imgNivel = 2;
    else if (xp <= 5000) imgNivel = 3;
    else if (xp <= 7000) imgNivel = 4;
    else if (xp <= 8000) imgNivel = 5;
    else if (xp <= 9000) imgNivel = 6;
    else if (xp <= 10000) imgNivel = 7;
    else imgNivel = 8;

    // Atualiza a imagem do herói
    atualizarImagemHeroi(imgNivel);
};

// Adiciona o evento de clique ao botão
document.getElementById('classificarBtn').addEventListener('click', classificarHeroi);
