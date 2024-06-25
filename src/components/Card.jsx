import React, { useState } from 'react';
import style from '../styles/components/Card.module.css';

const Card = (props) => {
  const [disponivel, setDisponivel] = useState(props.disponivel);

  const handleReservaClick = () => {
    if (props.disponivel) {
      setDisponivel(false);
      props.onReservaClick(props.id); 
    }
  };

  return (
    <div className={style.cardContainer}>
      <img src={props.imagem} alt={props.reserva} className={style.cardImage} />
      <div className={style.cardHeader}>{props.tipo}</div>
      <div className={style.cardText}>{props.descricao}</div>
      <div className={style.cardText}>Valor: {props.valor}</div>
      <div className={style.cardText}>Estado: {props.estado}</div>
      <div className={style.cardText}>Avaliação: {props.avaliacao}</div>
      <div className={style.cardText}>Reserva: {props.reserva}</div>
      <div className={style.cardText} style={{ color: disponivel ? 'green' : 'red' }}>
        Disponível: {disponivel ? 'Sim' : 'Não'}
      </div>
      {disponivel && (
        <button className={style.cardButton} onClick={handleReservaClick}>
          Reservar
        </button>
      )}
    </div>
  );
};

export default Card;
