import { useState } from 'react';
import style from '../styles/pages/Login.module.css';
import googleIcon from '../assets/imagens/icones/google.svg';  
import instagramIcon from '../assets/imagens/icones/instagram.svg';  
import twitterIcon from '../assets/imagens/icones/twitter.svg'; 
import emailIcon from '../assets/imagens/icones/email.svg'; 
import senhaIcon from '../assets/imagens/icones/senha.svg';  
import eyeIcon from '../assets/imagens/icones/olho.svg';
import setLogin from '../components/login';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [viewer, setViewer] = useState(false); 

    const alternarVisibilidadeSenha = () => {
        setViewer(!viewer); 
    };

    return (
        <div>
            <div className={style.Telalogin}>
                <div className={style.panelContainer}>
                    <div className={style.leftPanel}>
                        <div className={style.socialButton}>
                            <img src={googleIcon} alt="Google Icon" />
                            <h4>Logar com o Google</h4>
                        </div>
                        <div className={style.socialButton}>
                            <img src={instagramIcon} alt="Instagram Icon" />
                            <h4>Logar com o Instagram</h4>
                        </div>
                        <div className={style.socialButton}>
                            <img src={twitterIcon} alt="Twitter Icon" />
                            <h4>Logar com o Twitter</h4>
                        </div>
                        <div className={style.register}>
                            <p>Caso você não tenha uma conta aperte esse botão</p>
                            <br />
                            <a href="/cadastrar">Cadastrar</a>
                        </div>
                    </div>
                    <div className={style.rightPanel}>
                        <div className={style.loginBox}>
                            <h2>Login</h2>
                            <div className={style.inputGroup}>
                                <img src={emailIcon} alt="Email Icon" />
                                <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu Email" />
                            </div>
                            <div className={style.inputGroup}>
                                <img src={senhaIcon} alt="Senha Icon" />
                                <input type={viewer ? 'text' : 'password'} value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha"/>
                                <button className={style.eyeButton} onClick={alternarVisibilidadeSenha}>
                                    <img src={eyeIcon} alt="Mostrar a senha/ ou não" />
                                </button>
                            </div>
                            <button className={style.loginButton} onClick={() => setLogin(email, senha)}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
