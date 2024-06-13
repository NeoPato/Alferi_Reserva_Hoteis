import Menu from '../components/menu.jsx';
import Footer from '../components/footer.jsx';
import style from '../styles/pages/Viagens.module.css';

function Pagemento() {
    return (
        <div className={style.TelaPagamento}>
            <Menu />
            
            <Footer />
        </div>
    );
}

export default Pagemento;
