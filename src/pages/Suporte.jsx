import { useState } from 'react';
import Menu from '../components/menu';
import style from "../styles/pages/suporte.module.css";

function Suporte() {
    const defaultPhoneNumber = '5541984666011';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleWhatsAppMessage = () => {
        const { name, email, message } = formData;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
        Nome:%20${name}%0D%0A
        Email:%20${email}%0D%0A
        Mensagem:%20${message}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className={style.containerAllContact}>
            <Menu />
            <h1>Contato</h1>
            <div>
                <h2>WhatsApp</h2>
                <div className={style.inputsDiv}>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="message">Mensagem</label>
                        <textarea className={style.message} id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button className={style.btnCont} onClick={handleWhatsAppMessage}>Enviar mensagem</button>
                </div>
            </div>
        </div>
    );
}

export default Suporte;
