// Criação de switch com as rotas correspondentes 28/06/2024
function rotaGraf(rota) {
    switch (rota) {
        case 'quiz':
            window.location.href = '../dashboard/dashboard.html';
            break;
        case 'game':
            window.location.href = '../dashboard/dashGame.html';
            break;
        // add rota em switch para gráfico
        case 'rankQuiz':
            window.location.href = '../dashboard/dashEstQuiz.html';
            break;
        case 'rankGame':
            window.location.href = '../dashboard/dashEstGame.html';
            break;
        // add rota para histórico do site
        case 'hist':
            window.location.href = '../dashboard/historico.html';
            break;
        default:
            alert('Gráfico não encontrado!')
            break;
    }
}

// Criação de um switch simples para o tipo de gráfico 02/07/2024
function session(type) {
    sessionStorage.typeGraf = type;
    setTimeout(() => {
        window.location.reload(true);
    }, 500);
}

// Criação de uma nova função para switch gráficos de ranking 31/07/2024
function session1(type) {
    sessionStorage.typeGrafRk = type;
    setTimeout(() => {
        sessionStorage.setAfterReload = true;
        window.location.reload(true);
    }, 500);
}

// Adicionando listener para evento de carregamento de página 31/07/2024
window.addEventListener('load', ()=>{
    if(sessionStorage.setAfterReload){
        setAfter();
        delete sessionStorage.setAfterReload;
    }
});

// Setando novo valor para recarregamento de página
function setAfter() {
    sessionStorage.typeGrafRk = 'bar';
}