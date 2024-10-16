
const candidatos = {
    11: "Ana",
    22: "Bruno",
    33: "Carla",
    44: "Daniel",
    55: "Elena"
};

const votos = {
    11: 0,
    22: 0,
    33: 0,
    44: 0,
    55: 0,
    branco: 0,
    nulo: 0
};

let voto = '';

document.querySelectorAll('.btn-numero').forEach((button) => {
    button.addEventListener('click', () => {
        if (voto.length < 2) {
            voto += button.getAttribute('data-numero');
            document.getElementById('num-candidato').value = voto;
            mostrarCandidato(voto);
        }
    });
});

document.getElementById('btn-corrigir').addEventListener('click', () => {
    voto = '';
    document.getElementById('num-candidato').value = '';
    document.getElementById('nome-candidato').innerText = '';
});

document.getElementById('btn-branco').addEventListener('click', () => {
    voto = 'Branco';
    document.getElementById('num-candidato').value = 'Branco';
    document.getElementById('nome-candidato').innerText = 'Voto em Branco';
});

document.getElementById('btn-confirma').addEventListener('click', () => {
    if (voto === 'Branco') {
        votos.branco++;
        alert('Voto em branco confirmado!');
    } else if (voto.length === 2) {
        if (candidatos[voto]) {
            votos[voto]++;
            alert(`Voto em ${candidatos[voto]} confirmado!`);
        } else {
            votos.nulo++;
            alert('Voto nulo confirmado!');
        }
    } else {
        alert('Voto inválido!');
    }
    resetUrna();
});

document.getElementById('btn-resultados').addEventListener('click', () => {
    const resultadoDiv = document.getElementById('resultado-votos');
    resultadoDiv.innerHTML = `
    <table border="1">
            <thead>
                <tr>
                    <th>candidato</th>
                    <br>
                    <th>votos
                    </th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ana</td>
                    <th>${votos[11]} votos</th>
                </tr>
                <tr>
                    <td>Bruno</td>
                    <th>${votos[22]}</th>
                </tr>
                <tr>
                    <td>Carla</td>
                    <th>${votos[33]}</th>
                </tr>
                <tr>
                    <td>Daniel</td>
                    <th>${votos[44]}</th>
                </tr>
                <tr>
                    <td>Elena</td>
                    <th>${votos[55]}</th>
                </tr>
            </tbody>
        </table>
        <p>Ana(11): ${votos[11]} votos</p>
        <p>Bruno (22): ${votos[22]} votos</p>
        <p>Carla (33): ${votos[33]} votos</p>
        <p>Daniel (44): ${votos[44]} votos</p>
        <p>Elena (55): ${votos[55]} votos</p>
        <p>Votos em Branco: ${votos.branco}</p>
        <p>Votos Nulos: ${votos.nulo}</p>
    `;
});

function mostrarCandidato(voto) {
    const nomeCandidato = candidatos[voto] || 'Voto Nulo';
    document.getElementById('nome-candidato').innerText = nomeCandidato;
}

function resetUrna() {
    voto = '';
    document.getElementById('num-candidato').value = '';
    document.getElementById('nome-candidato').innerText = '';
}
