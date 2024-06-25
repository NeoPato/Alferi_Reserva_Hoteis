import React, { useState, useEffect } from 'react';
import styles from '../styles/pages/checkIn.module.css';
import quartosData from '../constant/quartos.json';

const CheckIn = ({ hotel }) => {
  const [quarto, setQuarto] = useState(hotel);
  const [confirmado, setConfirmado] = useState(false);

  useEffect(() => {
    setQuarto(hotel);
  }, [hotel]);

  const handleConfirmarCheck = () => {
    // Criar uma cópia do quarto atualizado com a disponibilidade invertida
    const updatedQuarto = { ...quarto, disponivel: !quarto.disponivel };

    // Atualizar o estado local do quarto
    setQuarto(updatedQuarto);

    // Atualizar o estado do JSON puro (se necessário)
    const novoQuartosData = quartosData.map(item => {
      if (item.id === updatedQuarto.id) {
        return updatedQuarto;
      }
      return item;
    });

    // Atualizar o JSON puro
    localStorage.setItem('quartosData', JSON.stringify(novoQuartosData));

    setConfirmado(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Check-In do Quarto</h1>
      <div className={styles.imgContainer}>
        <img src={quarto.imagem} alt={quarto.reserva} className={styles.image} />
      </div>
      <div className={styles.details}>
        <div className={styles.detail}><strong>Tipo:</strong> {quarto.tipo}</div>
        <div className={styles.detail}><strong>Descrição:</strong> {quarto.descricao}</div>
        <div className={styles.detail}><strong>Valor:</strong> {quarto.valor}</div>
        <div className={styles.detail}><strong>Estado:</strong> {quarto.estado}</div>
        <div className={styles.detail}><strong>Avaliação:</strong> {quarto.avaliacao}</div>
        <div className={styles.detail}><strong>Reserva:</strong> {quarto.reserva}</div>
        <div className={styles.detail}><strong>Disponível:</strong> {quarto.disponivel ? 'Sim' : 'Não'}</div>
      </div>
      <button onClick={handleConfirmarCheck} className={styles.button}>
        Confirmar Check-In
      </button>
      {confirmado && <div className={styles.confirmation}>Check-In Confirmado!</div>}
    </div>
  );
};

export default CheckIn;
