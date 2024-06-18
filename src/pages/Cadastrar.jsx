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
import VisibilidadeSenha from '../Back-End/script/AlternarVisibilidadeSenha';
import formatCPF  from '../Back-End/script/FormatCPF';
import tratarMudancaCPF from '../Back-End/script/tratarMudancaCPF ';

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
                                <input type="text" id="name" placeholder="Digite seu nome"/>
                            </div>
                            <div className={style.inputGroup}>
                                <img src={profileIcon} alt="CPF icon" />
                                <input type="text" id="cpf" name="cpf" value={formatCPF(cpf)} onChange={(e) => tratarMudancaCPF(e, setCpf)} placeholder="Digite seu CPF" maxlength="14"/>
                            </div>
                            <div className={style.inputGroup}>
                                <img src={emailIcon} alt="Email Icon" />
                                <input type="email" id="email" name="email" placeholder="Digite seu Email" />
                            </div>
                            <div className={style.inputGroup}>
                                <img src={nascIcon} alt="Nascimento Icon" />
                                <input type="date" id="dateOfBirth" name="data de nascimento" placeholder="Coloque sua data de nascimento" max="2006-12-31"/>
                            </div>
                            <div className={style.inputGroup}>
                                <img src={telefIcon} alt="Telefone Icon" />
                                <input type="tel" id="telefone" name="telefone"  maxlength="11" placeholder="Digite o número de telefone"/>
                                </div>
                            <div className={style.inputGroup}>
                                <img src={senhaIcon} alt="Senha Icon" />
                                <input type={mostrarSenha ? 'text' : 'password'} value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" id="senha"/>
                                <button className={style.eyeButton} onClick={alternarVisibilidadeSenha}>
                                    <img src={eyeIcon} alt="Mostrar a senha/ ou não"/>
                                </button>
                            </div>
                            <button className={style.cadastrarButton} onClick={"../src/server/node.cjs"}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastrar;
