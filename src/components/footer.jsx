import style from '../styles/components/footer.module.css';

export default function Footer(){
    return(
        <footer className={style.rodape}> 
            <p>&copy; 2024 Hotéis Alferi. Todos os direitos reservados.</p>
            <div className={style.redeSocial}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://br.freepik.com/search">Ícone de Freepik</a>
            </div>
        </footer>
    );
}