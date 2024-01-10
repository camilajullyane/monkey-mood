const descricao = document.getElementById('descricao');
const imagem = document.getElementById('img');
const macaco = {
    macaco0: 'Macaco Estudioso',
    macaco1: 'Macaco Chato',
    macaco2: 'Macaco Despirocado',
    macaco3: 'Macaco Toquinho',
    macaco4: 'Macaco Fofo',
    macaco5: 'Macaco Safado',
    macaco6: 'Macaco Linguarudo',
    macaco7: 'Macaco Homofóbico',
    macaco8: 'Macaco Praieiro',
    macaco9: 'Macaco Modo Sério',
    macaco10: 'Macaco amimir',
    macaco11: 'Macaco Julgador',
    macaco12: 'Macaco Sofredor',
    macaco13: 'Macaco Sensual',
    macaco14: 'Macaco Sorridente',
    macaco15: 'Macaco Depressivo',
    macaco16: 'Macaco Preguiça',
    macaco17: 'Macaco Trouxa',
    macaco18: 'Macaco Rabugento',
    macaco19: 'Macaco Fofoqueiro',
    macaco20: 'Macaco Desonline'
}

function sortearMacaco() {
    let num = Math.floor(Math.random() * 20)
    console.log(num)
    imagem.src = `images/macaco${num}.webp`
    descricao.innerHTML = macaco[`macaco${num}`]
}