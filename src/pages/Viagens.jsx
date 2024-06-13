import React from 'react';
import Footer from '../components/footer.jsx';
import style from '../styles/pages/Viagens.module.css';

function Viagens() {
    return (
        <div className={style.TelaReserva}>
            <div className={style.mainContent}>
                <div className={style.leftPane}>
                    <div className={style.formContainer}>
                        <label htmlFor="estado">Estado:</label>
                        <select id="estado" name="estado" className={style.selectField}>
                            <option value="selecione">(Selecione)</option>
                            <option value="santaCatarina">Santa Catarina</option>
                            <option value="parana">Paraná</option>
                            <option value="rioDeJaneiro">Rio de Janeiro</option>
                            <option value="bahia">Bahia</option>
                        </select>

                        <label htmlFor="tipoViagem">Tipos de Viagens:</label>
                        <select id="tipoViagem" name="tipoViagem" className={style.selectField}>
                            <option value="selecione">(Selecione)</option>
                            <option value="chacara_Fazenda">Chácara/Fazenda</option>
                            <option value="cidadeGrande">Cidade Grande</option>
                            <option value="praia">Praia</option>
                        </select>

                        <label htmlFor="tipoReserva">Tipo de Reserva:</label>
                        <select id="tipoReserva" name="tipo-reserva" className={style.selectField}>
                            <option value="selecione">(Selecione)</option>
                            <option value="economico">Econômico</option>
                            <option value="solteiro">Solteiro</option>
                            <option value="casal">Casal</option>
                            <option value="duplo">Duplo</option>
                            <option value="suite">Suite</option>
                            <option value="luxo">Luxo</option>                     
                        </select>

                        <label htmlFor="avaliacao">Avaliação:</label>
                        <select id="avaliacao" name="avaliacao" className={style.selectField}>
                            <option value="selecione">(Selecione)</option>
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                        </select>

                        <button id="limparAplicacoes" className={style.clearButton}>Limpar Aplicações</button>
                    </div>
                </div>
                <div className={style.rightPane}>
                    <div className={style.resultsHeader}>
                        <span>Resultado da Busca</span>
                        <button className={style.newSearchButton}>Nova Pesquisa</button>
                    </div>
                    <div className={style.resultsContainer}>
                        {/* Placeholder for search results */}
                        <div className={style.resultItem}></div>
                        <div className={style.resultItem}></div>
                        <div className={style.resultItem}></div>
                        <div className={style.resultItem}></div>
                        <div className={style.resultItem}></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Viagens;
