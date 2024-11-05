// Seleciona os elementos da página
const nomeHeroiInput = document.getElementById('nomeHeroi');
const xpHeroiInput = document.getElementById('xpHeroi');
const resultado = document.getElementById('resultado');
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

// Função para classificar o herói e exibir o resultado
const classificarHeroi = () => {
    const nome = nomeHeroiInput.value;
    const xp = Number(xpHeroiInput.value);

    // Reproduz o som
    somClick.play();

    resultado.textContent = `O Herói de nome ${nome} está no nível de ${classificarNivel(xp)}`;
};

// Adiciona o evento de clique ao botão
document.getElementById('classificarBtn').addEventListener('click', classificarHeroi);


