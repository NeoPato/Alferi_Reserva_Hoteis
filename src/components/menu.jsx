import styles from '../styles/components/menu.module.css'; 

export default function Menu() {
  return (
    <nav className={styles.BarraMenu}>
      <img src="src/assets/imagens/logo_alferi_hotel_icone.svg" alt="logo" />
      <a href="/"><h4>Hotéis Alferi</h4></a>
      <p>
        <a href="/login">Fazer Login</a>
      </p>
      <p>
        <a href="/viagens">Viagens</a>
      </p>
      <p>
        <a href="/suporte">Suporte</a>
      </p>
      <p>
        <a href="/teste"></a>
      </p>
    </nav>
  );
}
