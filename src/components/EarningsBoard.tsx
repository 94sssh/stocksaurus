import { ticker } from '../constants/ticker';
import style from './EarningsBoard.module.css';
import StockCard from './StockCard';

interface EarningsBoardProps {
  stocksBMO?: string[];
  stocksAMC?: string[];
}

const EarningsBoard = ({ stocksBMO, stocksAMC }: EarningsBoardProps) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <span className={style.title}>개장 전</span>
        {stocksBMO ? (
          <div className={style.board}>
            {stocksBMO.map((stock) => (
              <StockCard key={stock} stock={stock} />
            ))}
          </div>
        ) : (
          <div className={style.empty}>발표 없음</div>
        )}
      </div>
      <div className={style.wrapper}>
        <span className={style.title}>마감 후</span>
        {stocksAMC ? (
          <div className={style.board}>
            {stocksAMC.map((stock) => (
              <StockCard key={stock} stock={stock} />
            ))}
          </div>
        ) : (
          <div className={style.empty}>발표 없음</div>
        )}
      </div>
    </div>
  );
};

export default EarningsBoard;
