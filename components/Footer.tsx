import styles from '../public/styles/Footer.module.scss';
import { Github } from '../utils/icons';


export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Made by{' '}
        <a href='https://github.com/MathiasRime' target='_blank' rel='noreferrer'>
          <b>Mathias Rime</b>
        </a>
      </p>
      <div>
        <a href='https://github.com/MathiasRime' className={styles.icon} target='_blank' rel='noreferrer'>
          <Github />
        </a>
      </div>
    </div>
  );
}
