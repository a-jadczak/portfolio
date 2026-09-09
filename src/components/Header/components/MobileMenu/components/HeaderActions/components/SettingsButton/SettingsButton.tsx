import { Settings } from 'lucide-react';
import styles from './../IconAction.module.scss';

interface SettingsButtonProps {
  iconSize: number;
}

const SettingsButton = ({ iconSize }: SettingsButtonProps) => (
  <button
    type="button"
    className={`clipped-corners ${styles.iconAction}`}
    aria-label="Open settings"
  >
    <Settings size={iconSize} aria-hidden="true" />
  </button>
);

export default SettingsButton;
