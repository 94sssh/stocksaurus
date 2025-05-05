import style from './FearAndGreed.module.css';

interface FearAndGreedProps {
  fearAndGreedIndex: number;
  vix: number;
  vixRate: number;
}

const FearAndGreed = ({
  fearAndGreedIndex,
  vix,
  vixRate,
}: FearAndGreedProps) => {
  const getStatusInfo = (value) => {
    if (value <= 25) return { color: '#FF4136', text: 'EXTREME FEAR' };
    if (value <= 45) return { color: '#FFBF00', text: 'FEAR' };
    if (value <= 55) return { color: '#1c1c1c', text: 'NEUTRAL' };
    if (value <= 75) return { color: '#2ECC40', text: 'GREED' };
    return { color: '#0074D9', text: 'EXTREME GREED' };
  };

  const { color, text } = getStatusInfo(fearAndGreedIndex);

  return (
    <div className={style.fearGreedContainer}>
      <div className={style.fearGreedWrapper}>
        <span style={{ color: color }}>{text}</span>
        <span>{fearAndGreedIndex}</span>
      </div>
      <span>
        VIX : {vix} ({vixRate}%)
      </span>
    </div>
  );
};

export default FearAndGreed;
