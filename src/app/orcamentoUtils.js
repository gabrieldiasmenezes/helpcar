// utils/orcamentoUtils.js

export const servicosPrecos = {
    "Troca de Óleo": 150,
    "Alinhamento": 160,
    "Balanceamento": 115,
    "Revisão": 500,
    "Troca de Óleo e Filtro": 150,
    "Troca de Bateria": 425,
    "Troca de Pneus (por unidade)": 400
};

export const sugerirServicos = (valorMaximo) => {
    const maxVal = parseFloat(valorMaximo);
    if (!isNaN(maxVal)) {
        return Object.entries(servicosPrecos)
            .filter(([_, preco]) => preco <= maxVal)
            .map(([servico]) => servico);
    }
    return [];
};

export const calcularOrcamentoTotal = (servicosEscolhidos) => {
    return servicosEscolhidos.reduce((acc, servico) => {
        return acc + (servicosPrecos[servico] || 0);
    }, 0);
};
