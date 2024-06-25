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
                <br />
                <br />
                <a>Criadores do site:</a>
                <a href='https://github.com/NeoPato'>||Gabriel Sena||</a>
                <a href='https://github.com/Thais-Mainardes'>||Thais Mainardes||</a>
                <a href='https://github.com/Dg2904'>||Douglas Soares||</a>
            </div>
        </footer>
    );
}