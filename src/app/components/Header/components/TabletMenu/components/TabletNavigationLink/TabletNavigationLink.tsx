import styles from './TabletNavigationLink.module.scss';

interface TabletNavigationLinkProps {
  href: string;
  currentPath: string;
  text: string;
}

const TabletNavigationLink = ({ href, currentPath, text }: TabletNavigationLinkProps) => (
  <a
    className={styles.navigationLink}
    href={href}
    onClick={(event) => {
      if (currentPath === href) {
        event.preventDefault();
      }
    }}
    aria-current={currentPath === href ? 'page' : undefined}
  >
    {text}
  </a>
);

export default TabletNavigationLink;
