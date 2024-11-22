import style from './EconomicCalendar.module.css';

const headCategory = ['이벤트', '중요도', '실제', '예측', '이전'];

const EconomicCalendar = ({ data }) => {
  return (
    <table className={style.container}>
      <thead>
        <tr className={style.row}>
          {headCategory.map((category) => (
            <th key={category}>{category}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.event} className={style.row}>
            {item.map((el) => (
              <td>{el}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EconomicCalendar;
