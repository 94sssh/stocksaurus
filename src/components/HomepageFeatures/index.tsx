import { TickerTape, TickerWidget } from '@site/src/components/widget';
import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <TickerWidget />
        <TickerTape />
      </div>
    </section>
  );
}
