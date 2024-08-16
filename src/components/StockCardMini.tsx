import style from './StockCardMini.module.css';

interface StockProps {
  ticker: string;
  price?: number;
  rate: number;
}

const StockCardMini = ({ ticker, price, rate }: StockProps) => {
  return (
    <a
      href={`https://finance.yahoo.com/quote/${ticker}`}
      className={style.stock}
      target='_blank'
      rel='noreferrer'
    >
      <span className={style.ticker}>{ticker}</span>
      {price && <span className={style.price}>{price.toLocaleString()}</span>}
      <span className={style[rate >= 0 ? 'gainer' : 'loser']}>
        {rate >= 0 ? '▲' : '▼'} {rate}%
      </span>
    </a>
  );
};

export default StockCardMini;
