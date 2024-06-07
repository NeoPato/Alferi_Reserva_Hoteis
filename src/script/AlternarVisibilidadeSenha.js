import { useState } from 'react';

function VisibilidadeSenha() {
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const alternarVisibilidadeSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    return { senha, setSenha, mostrarSenha, alternarVisibilidadeSenha };
}

export default VisibilidadeSenha;
