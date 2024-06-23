import React from 'react';
import style from '../styles/components/Card.module.css';

const Card = (props) => {
  return (
    <div className={style.cardContainer}>
      <img src={props.imagem} alt={props.reserva} className={style.cardImage} />
      <div className={style.cardHeader}>{props.tipo}</div>
      <div className={style.cardText}>{props.descricao}</div>
      <div className={style.cardText}>Valor: {props.valor}</div>
      <div className={style.cardText}>Estado: {props.estado}</div>
      <div className={style.cardText}>Avaliação: {props.avaliacao}</div>
      <div className={style.cardText}>Reserva: {props.reserva}</div>
      <div className={style.cardText} style={{ color: props.disponivel ? 'green' : 'red' }}>
      Disponível: {props.disponivel ? 'Sim' : 'Não' } </div>
      <button className={style.cardButton}>Reservar</button>
    </div>
  );
};

export default Card;
