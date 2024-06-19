import style from '../styles/components/Card.module.css';


const Card = ( props ) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardHeader}>{props.tipo}</div>
      <img src={props.imagem} alt={props.reserva} className={style.cardImage} />
      <div className={style.cardText}>{props.descricao}</div>
      <div className={style.cardText}>Valor: R$ {props.valor}</div>
      <div className={style.cardText}>Estado: {props.estado}</div>
      <div className={style.cardText}>Avaliação: {props.avaliacao} estrelas</div>
      <div className={style.cardFooter}>Reserva: {props.reserva}</div>
      <button className={style.cardButton}>Reservar</button>
    </div>
  );
};

export default Card;
