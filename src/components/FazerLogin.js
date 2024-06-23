import { api } from "../lib/server"

const formatCPF = (valor) => {
    let valorFormatado = valor.replace(/\D/g, '');

    return valorFormatado;
};

export default formatCPF;