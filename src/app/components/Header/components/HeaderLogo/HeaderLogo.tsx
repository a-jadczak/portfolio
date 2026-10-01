import styles from './HeaderLogo.module.scss';

const HeaderLogo = () => (
  <a href="/" className={styles.logo} aria-label="Home page">
    AJ
    <span className={styles.logoAccent} aria-hidden="true">
      _
    </span>
  </a>
);

export default HeaderLogo;
