
const formatCPF = (valor) => {
    let valorFormatado = valor.replace(/\D/g, '');

    valorFormatado = valorFormatado.replace(/(\d{3})(\d)/, '$1.$2');
    valorFormatado = valorFormatado.replace(/(\d{3})(\d)/, '$1.$2');
    valorFormatado = valorFormatado.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    return valorFormatado;
};

export default formatCPF;

