import { useState } from 'react';

function VisibilidadeSenha() {
    const [vi, setVi] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const alternarVisibilidadeSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    return { vi, setVi, mostrarSenha, alternarVisibilidadeSenha };
}

export default VisibilidadeSenha;
