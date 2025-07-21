import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../styles/pages/Login.module.css';
import googleIcon from '/icones/google.svg';
import instagramIcon from '/icones/instagram.svg';
import twitterIcon from '/icones/twitter.svg';
import emailIcon from '/icones/email.svg';
import senhaIcon from '/icones/senha.svg';
import eyeIcon from '/icones/olho.svg';
import { api } from '../lib/server';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [viewer, setViewer] = useState(false);
    const navigate = useNavigate();

    const alternarVisibilidadeSenha = () => {
        setViewer(!viewer);
    };

    const handleClick = async () => {
        if (!email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await api.post("/login", {
                email,
                password
            });
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/");
        } catch (error) {
            console.error("Login error:", error);
            alert("Não foi possível fazer login na sua conta.");
        }
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
                            <p>Caso você não tenha uma conta, aperte este botão</p>
                            <br />
                            <a href="/cadastrar">Cadastrar</a>
                        </div>
                    </div>
                    <div className={style.rightPanel}>
                        <div className={style.loginBox}>
                            <h2>Login</h2>
                            <div className={style.inputGroup}>
                                <img src={emailIcon} alt="Email Icon" />
                                <input
                                    type="email"
                                    value={email}
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Digite seu Email"
                                />
                            </div>
                            <div className={style.inputGroup}>
                                <img src={senhaIcon} alt="Senha Icon" />
                                <input
                                    type={viewer ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Digite sua senha"
                                />
                                <button className={style.eyeButton} onClick={alternarVisibilidadeSenha}>
                                    <img src={eyeIcon} alt="Mostrar a senha/ ou não" />
                                </button>
                            </div>
                            <button className={style.loginButton} onClick={handleClick}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
