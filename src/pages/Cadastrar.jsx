import React, { useState } from 'react';
import style from '../styles/pages/Cadastrar.module.css';
import googleIcon from '../assets/imagens/icones/google.svg';  
import instagramIcon from '../assets/imagens/icones/instagram.svg';  
import twitterIcon from '../assets/imagens/icones/twitter.svg'; 
import emailIcon from '../assets/imagens/icones/email.svg'; 
import nascIcon from '../assets/imagens/icones/calendar.svg';
import senhaIcon from '../assets/imagens/icones/senha.svg';  
import profileIcon from '../assets/imagens/icones/profile.svg';
import telefIcon from '../assets/imagens/icones/telefone.svg';
import eyeIcon from '../assets/imagens/icones/olho.svg';
import { api } from '/src/lib/server.ts';
import { useNavigate } from 'react-router-dom';


function Cadastrar() {
    
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [viewer, setViewer] = useState(false); 
    const navigate = useNavigate();

    const formatCPF = (cpf) => {
        // Remove qualquer caractere que não seja dígito
        cpf = cpf.replace(/\D/g, '');
        
        // Limita o comprimento a 11 dígitos
        cpf = cpf.substring(0, 11);
        
        // Formata o CPF
        if (cpf.length <= 6) {
            cpf = cpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        } else if (cpf.length <= 9) {
            cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        } else {
            cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        }

        return cpf;
    };

    const alternarVisibilidadeSenha = () => {
        setViewer(!viewer); 
    };      

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validações básicas
        if (!name || !cpf || !email || !dateOfBirth || !phone || !password) {
            setError('Por favor, preencha todos os campos.');
            return;
        }
    
        try {
            const response = await api.post('/users', {
                name,
                cpf,
                email,
                dateOfBirth,
                phone,
                password,
            });
            
            navigate('/login');

        } catch (error) {
            setError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }
    };    
    
    return (
        <div className={style.TelaCadastrar}>
            <div className={style.panelContainer}>
                <div className={style.leftPanel}>
                    {/* Botões de cadastro social */}
                    <div className={style.socialButton}>
                        <img src={googleIcon} alt="Ícone do Google" />
                        <h4>Cadastrar com o Google</h4>
                    </div>
                    <div className={style.socialButton}>
                        <img src={instagramIcon} alt="Ícone do Instagram" />
                        <h4>Cadastrar com o Instagram</h4>
                    </div>
                    <div className={style.socialButton}>
                        <img src={twitterIcon} alt="Ícone do Twitter" />
                        <h4>Cadastrar com o Twitter</h4>
                    </div>
                    {/* Link para fazer login caso já tenha uma conta */}
                    <div className={style.register}>
                        <p>Caso você tenha uma conta, aperte este botão</p>
                        <br />
                        <a href="/login" >Logar</a>
                    </div>
                </div>
                <div className={style.rightPanel}>
                    <div className={style.cadastrarBox}>
                        <h2>Cadastrar</h2>
                        {/* Campos do formulário */}
                        <form onSubmit={handleSubmit}>
                            <div className={style.inputGroup}>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome"/>
                            </div>
                            <div className={style.inputGroup}>
                                <img src={profileIcon} alt="Ícone de CPF" />
                                <input type="text" value={formatCPF(cpf)} onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF" maxLength={14} />
                            </div>
                            <div className={style.inputGroup}>
                                <img src={emailIcon} alt="Ícone de Email" />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Digite seu Email" />
                            </div>
                            <div className={style.inputGroup}>
                                <img src={nascIcon} alt="Ícone de Nascimento" />
                                <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} name="data de nascimento" placeholder="Coloque sua data de nascimento" max="2006-12-31"/>
                            </div>
                            <div className={style.inputGroup}>
                                <img src={telefIcon} alt="Ícone de Telefone" />
                                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} name="telefone" placeholder="Digite o número de telefone"/>
                            </div>
                            <div className={style.inputGroup}>
                                <img src={senhaIcon} alt="Ícone de Senha" />
                                <input type={viewer ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
                                <button type="button" className={style.eyeButton} onClick={alternarVisibilidadeSenha}>
                                    <img src={eyeIcon} alt="Mostrar a senha/ou não"/>
                                </button>
                            </div>
                            {/* Botão de envio do formulário */}
                            <button type="submit" className={style.cadastrarButton}>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastrar;
