import style from './StockCard.module.css';
import { ticker } from '../constants/ticker';

interface StockProps {
  stock: string;
}

const StockCard = ({ stock }: StockProps) => {
  return (
    <a
      href={`https://finance.yahoo.com/quote/${stock}`}
      className={style.stock}
      target='_blank'
      rel='noreferrer'
    >
      <span className={style.ticker}>{stock}</span>
      <span className={style.name}>{ticker[stock].company}</span>
    </a>
  );
};

export default StockCard;
