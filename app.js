// Lógica de cálculo (Regra de Negócio)
function calcularNivel(q1, q2, q3) {
    const pontuacao = parseInt(q1) + parseInt(q2) + parseInt(q3);
    
    if (pontuacao <= 2) {
        return 'Resultado Sugestivo: Desenvolvimento Típico ou Traços Leves (Não indica necessariamente TEA).';
    } else if (pontuacao <= 5) {
        return 'Resultado Sugestivo: TEA Nível 1 (Necessita de suporte).';
    } else if (pontuacao <= 7) {
        return 'Resultado Sugestivo: TEA Nível 2 (Necessita de suporte substancial).';
    } else {
        return 'Resultado Sugestivo: TEA Nível 3 (Necessita de suporte muito substancial).';
    }
}

// NOVA FUNÇÃO: Consumo da API pública da Wikipedia
async function buscarDefinicaoTEA() {
    try {
        const response = await fetch('https://pt.wikipedia.org/api/rest_v1/page/summary/Transtorno_do_espectro_autista');
        if (!response.ok) {
            throw new Error('Erro ao buscar dados da API');
        }
        const data = await response.json();
        return data.extract;
    } catch (error) {
        return 'Não foi possível carregar a definição no momento. Verifique sua conexão com a internet.';
    }
}

// Manipulação do DOM (Interface)
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', async () => {
        
        // 1. Carregar dados da API assim que a página abrir
        const wikiTextoDiv = document.getElementById('wiki-texto');
        if (wikiTextoDiv) {
            const resumo = await buscarDefinicaoTEA();
            wikiTextoDiv.textContent = resumo;
        }

        // 2. Lógica do envio do questionário
        const form = document.getElementById('quiz-form');
        const resultadoDiv = document.getElementById('resultado');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault(); // Evita recarregar a página
                
                const formData = new FormData(form);
                const q1 = formData.get('q1');
                const q2 = formData.get('q2');
                const q3 = formData.get('q3');

                const resultado = calcularNivel(q1, q2, q3);
                
                resultadoDiv.textContent = resultado;
                resultadoDiv.classList.remove('hidden');
            });
        }
    });
}

// Exportando funções para o Jest (Testes)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calcularNivel, buscarDefinicaoTEA };
}