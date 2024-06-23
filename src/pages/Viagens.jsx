import React, { useState } from 'react';
import Footer from '../components/footer.jsx';
import style from '../styles/pages/Viagens.module.css';
import quartos from '../const/quartos.json';
import Card from '../components/Card.jsx';
import Menu from '../components/menu.jsx';

function Viagens() {
    const [estado, setEstado] = useState('selecione');
    const [tipoViagem, setTipoViagem] = useState('selecione');
    const [tipoReserva, setTipoReserva] = useState('selecione');
    const [avaliacao, setAvaliacao] = useState('selecione');

    const handleEstadoChange = (event) => {
        setEstado(event.target.value);
    };

    const handleTipoViagemChange = (event) => {
        setTipoViagem(event.target.value);
    };

    const handleTipoReservaChange = (event) => {
        setTipoReserva(event.target.value);
    };

    const handleAvaliacaoChange = (event) => {
        setAvaliacao(event.target.value);
    };

    const handleClearFilters = () => {
        setEstado('selecione');
        setTipoViagem('selecione');
        setTipoReserva('selecione');
        setAvaliacao('selecione');
    };


    const filteredQuartos = quartos.filter((quarto) => {
        return (
            (estado === 'selecione' || quarto.estado.toLowerCase() === estado.toLowerCase()) &&
            (tipoViagem === 'selecione' || quarto.reserva.toLowerCase() === tipoViagem.toLowerCase()) &&
            (tipoReserva === 'selecione' || quarto.tipo.toLowerCase() === tipoReserva.toLowerCase()) &&
            (avaliacao === 'selecione' || quarto.avaliacao.length === parseInt(avaliacao))
        );
    });

    return (
        <>
        <Menu/>
        <div className={style.TelaReserva}>
            <div className={style.mainContent}>
                <div className={style.leftPane}>
                    <div className={style.formContainer}>
                        <label htmlFor="estado">Estado:</label>
                        <select id="estado" name="estado" className={style.selectField} value={estado} onChange={handleEstadoChange}>
                            <option value="selecione">(Selecione)</option>
                            <option value="Santa Catarina">Santa Catarina</option>
                            <option value="Paraná">Paraná</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Bahia">Bahia</option>
                        </select>

                        <label htmlFor="tipoViagem">Tipos de Viagens:</label>
                        <select id="tipoViagem" name="tipoViagem" className={style.selectField} value={tipoViagem} onChange={handleTipoViagemChange}>
                            <option value="selecione">(Selecione)</option>
                            <option value="Chácara">Chácara/Fazenda</option>
                            <option value="Cidade Grande">Cidade Grande</option>
                            <option value="Praia">Praia</option>
                        </select>

                        <label htmlFor="tipoReserva">Tipo de Reserva:</label>
                        <select id="tipoReserva" name="tipo-reserva" className={style.selectField} value={tipoReserva} onChange={handleTipoReservaChange}>
                            <option value="selecione">(Selecione)</option>
                            <option value="Econômico">Econômico</option>
                            <option value="Solteiro">Solteiro</option>
                            <option value="Casal">Casal</option>
                            <option value="Duplo">Duplo</option>
                            <option value="Suite">Suite</option>
                            <option value="Luxo">Luxo</option>                     
                        </select>

                        <label htmlFor="avaliacao">Avaliação:</label>
                        <select id="avaliacao" name="avaliacao" className={style.selectField} value={avaliacao} onChange={handleAvaliacaoChange}>
                            <option value="selecione">(Selecione)</option>
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                        </select>

                        <button id="limparAplicacoes" className={style.clearButton} onClick={handleClearFilters}>Limpar Aplicações</button>
                    </div>
                </div>
                <div className={style.rightPane}>
                    <div className={style.resultsHeader}>
                        <span>Resultado da Busca</span>
                        <button className={style.newSearchButton} onClick={handleClearFilters}>Nova Pesquisa</button>
                    </div>
                    <div className={style.resultsContainer}>
                        <div>
                            <div>
                                {filteredQuartos.map((quarto, index) => (
                                    <Card
                                        key={index}
                                        tipo={quarto.tipo}
                                        descricao={quarto.descricao}
                                        valor={quarto.valor}
                                        estado={quarto.estado}
                                        avaliacao={quarto.avaliacao}
                                        reserva={quarto.reserva}
                                        imagem={quarto.imagem}
                                        disponivel={quarto.disponivel}
                                    ></Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
    );
}

export default Viagens;
