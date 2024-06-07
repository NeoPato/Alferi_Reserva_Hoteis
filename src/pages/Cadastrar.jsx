import React, { useState } from 'react';
import style from '../styles/Cadastrar.module.css';
import googleIcon from '../assets/imagens/icones/google.png';  
import instagramIcon from '../assets/imagens/icones/instagram.png';  
import twitterIcon from '../assets/imagens/icones/twitter.png'; 
import emailIcon from '../assets/imagens/icones/email.png'; 
import nascIcon from '../assets/imagens/icones/calendar.png';
import senhaIcon from '../assets/imagens/icones/senha.png';  
import profileIcon from '../assets/imagens/icones/profile.png';
import telefIcon from '../assets/imagens/icones/telefone.png';
import eyeIcon from '../assets/imagens/icones/olho.png';
import VisibilidadeSenha from '../script/AlternarVisibilidadeSenha';
import formatCPF  from '../script/FormatCPF';
import tratarMudancaCPF from '../script/tratarMudancaCPF ';

function Cadastrar() {
    const { senha, setSenha, mostrarSenha, alternarVisibilidadeSenha  } = VisibilidadeSenha();
    const [cpf, setCpf] = useState('');

    return (
        <div>
            <div className={style.TelaCadastrar}>
                <div className={style.panelContainer}>
                    <div className={style.leftPanel}>
                        <div className={style.socialButton}>
                            <img src={googleIcon} alt="Google Icon" />
                            <h4>Cadastrar com o Google</h4>
                        </div>
                        <div className={style.socialButton}>
                            <img src={instagramIcon} alt="Instagram Icon" />
                            <h4>Cadastrar com o Instagram</h4>
                        </div>
                        <div className={style.socialButton}>
                            <img src={twitterIcon} alt="Twitter Icon" />
                            <h4>Cadastrar com o Twitter</h4>
                        </div>
                        <div className={style.register}>
                            <p>Caso você tenha uma conta aperte esse botão</p>
                            <br />
                            <a href="/login">Logar</a>
                        </div>
                    </div>
                    <div className={style.rightPanel}>
                        <div className={style.cadastrarBox}>
                            <h2>Cadastrar</h2>
                            <div className={style.inputGroup}>
                                <img src={profileIcon} alt="CPF icon" />
                                <input type="text" name="cpf" value={formatCPF(cpf)} onChange={(e) => tratarMudancaCPF(e, setCpf)} placeholder="Digite seu CPF" />
                            </div>
                            <div className={style.inputGroup}>
                                <img src={emailIcon} alt="Email Icon" />
                                <input type="email" name="email" placeholder="Digite seu Email" />
                            </div>
                            <div className={style.inputGroup}>
                                <img src={nascIcon} alt="Nascimento Icon" />
                                <input type="date" name="data de nascimento" placeholder="Coloque sua data de nascimento" />
                            </div>
                            <div className={style.inputGroup}>
                                <img src={telefIcon} alt="Telefone Icon" />
                                <input type="text" name="telefone" placeholder="Digite seu Telefone" />
                            </div>
                            <div className={style.inputGroup}>
                                <img src={senhaIcon} alt="Senha Icon" />
                                <input type={mostrarSenha ? 'text' : 'password'} value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha"/>
                                <button className={style.eyeButton} onClick={alternarVisibilidadeSenha}>
                                    <img src={eyeIcon} alt="Mostrar a senha/ ou não"/>
                                </button>
                            </div>
                            <button className={style.cadastrarButton}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastrar;
