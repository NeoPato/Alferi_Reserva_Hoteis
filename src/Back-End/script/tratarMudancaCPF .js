import  formatCPF  from './FormatCPF'; 

const tratarMudancaCPF = (event, setCpf) => {
    const cpfDigitado = event.target.value;
    const cpfFormatado = formatCPF(cpfDigitado); 
    setCpf(cpfFormatado); 
};

export default tratarMudancaCPF;