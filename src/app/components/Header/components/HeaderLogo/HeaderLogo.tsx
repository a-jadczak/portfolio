import styles from './HeaderLogo.module.scss';

interface HeaderLogoProps {
  currentPath: string;
}

const HeaderLogo = ({ currentPath }: HeaderLogoProps) => (
  <a
    href="/"
    aria-current={currentPath === '/' ? 'page' : undefined}
    onClick={(event) => {
      if (currentPath === '/') {
        event.preventDefault();
      }
    }}
    className={styles.logo}
    aria-label="Logo"
  >
    AJ
    <span className={styles.logoAccent} aria-hidden="true">
      _
    </span>
  </a>
);

export default HeaderLogo;
