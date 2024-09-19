import style from './StockCard.module.css';

interface StockProps {
  ticker: string;
  price: number;
  rate: number;
}

const StockCard = ({ ticker, price, rate }: StockProps) => {
  return (
    <a
      href={`https://finance.yahoo.com/quote/${ticker}`}
      className={style.stock}
      target='_blank'
      rel='noreferrer'
    >
      <span className={style.ticker}>{ticker}</span>
      <div className={style.wrapper}>
        <span>{price.toLocaleString()}</span>
        <span className={style[rate >= 0 ? 'gainer' : 'loser']}>
          {rate >= 0 ? '▲' : '▼'} {rate.toFixed(2)}%
        </span>
      </div>
    </a>
  );
};

export default StockCard;
