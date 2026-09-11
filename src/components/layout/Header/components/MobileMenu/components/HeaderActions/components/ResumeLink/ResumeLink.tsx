import { SquareArrowOutUpRight } from 'lucide-react';
import styles from './ResumeLink.module.scss';

interface ResumeLinkProps {
  href: string;
}

const ResumeLink = ({ href }: ResumeLinkProps) => (
  <a href={href} target="_blank" className={`clipped-corners ${styles.resumeLink}`}>
    <span className={styles.resumeText}>Resume</span>
    <SquareArrowOutUpRight size={12} aria-hidden="true" />
  </a>
);

export default ResumeLink;
