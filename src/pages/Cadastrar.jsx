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
import formatCPF from '../components/FormatCPF';
import tratarMudancaCPF from '../components/tratarMudancaCPF ';
import { api } from '/src/lib/server.ts';

function Cadastrar() {
    
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [viewer, setViewer] = useState(false); 

    const alternarVisibilidadeSenha = () => {
        setViewer(!viewer); 
    };      


    const handleInsert = () => {
        if (!name) {
            setInfoName("Please enter a name");
            return;
        } else {
            setInfoName("");
        }
        
        if (!cpf) {
            setInfoCpf("Please enter a CPF");
            return;
        } else {
            setInfoCpf("");
        }
        
        if (!email) {
            setInfoEmail("Please enter an email");
            return;
        } else {
            setInfoEmail("");
        }
        
        if (!dateOfBirth) {
            setInfoDateOfBirth("Please enter a date of birth");
            return;
        } else {
            setInfoDateOfBirth("");
        }
        
        if (!phone) {
            setInfoPhone("Please enter a phone number");
            return;
        } else {
            setInfoPhone("");
        }
        
        if (!password) {
            setInfoPassword("Please enter a password");
            return;
        } else {
            setInfoPassword("");
        }
        
        if (!confirmPassword) {
            setInfoConfirmPassword("Please confirm your password");
            return;
        } else {
            setInfoConfirmPassword("");
        } 
    
        api.post('/users', {
          name,
          email,
          password,
          plan: 'Basic'   
        }).then(function(response) {
          console.log(response)
          navigate("/log-in-account");
        }).catch(function(error) {
          console.log(error)
          setError("Unable to create your account");      
        })
        
        setInfoName("");
        setInfoEmail("");
        setInfoPassword("");
        setInfoConfirmPassword("");
        setError("");
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
                        <a href="/login">Logar</a>
                    </div>
                </div>
                <div className={style.rightPanel}>
                    {/* Formulário de cadastro */}
                    <form className={style.cadastrarBox} onSubmit={handleSubmit}>
                        <h2>Cadastrar</h2>
                        {/* Campos do formulário */}
                        <div className={style.inputGroup}>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome"/>
                        </div>
                        <div className={style.inputGroup}>
                            <img src={profileIcon} alt="Ícone de CPF" />
                            <input type="text" id="cpf" name="cpf" value={formatCPF(cpf)} onChange={(e) => tratarMudancaCPF(e, setCpf)} placeholder="Digite seu CPF" maxLength={14} />
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
    );
}

export default Cadastrar;
