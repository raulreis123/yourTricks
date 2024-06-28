function rotaGraf(rota){
    switch (rota) {
        case 'quiz':
            window.location.href = '../dashboard/dashboard.html';    
            break;
        case 'game':
            window.location.href = '../dashboard/dashGame.html';        
            break;
        default:
            alert('Nenhum gráfico encontrado!')
            break;
    }
}