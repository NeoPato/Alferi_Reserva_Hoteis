import { useEffect, useState } from 'react';
import styles from '../styles/components/menu.module.css';

export default function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <nav className={styles.BarraMenu}>
      <img src="src/assets/imagens/logo_alferi_hotel_icone.svg" alt="logo" />
      <a href="/"><h4>Hotéis Alferi</h4></a>
      <p>
        {isLoggedIn ? (
          <a href="/perfil">Perfil</a>
        ) : (
          <a href="/login">Fazer Login</a>
        )}
      </p>
      <p>
        <a href="/viagens">Viagens</a>
      </p>
      <p>
        <a href="/suporte">Suporte</a>
      </p>
    </nav>
  );
}
