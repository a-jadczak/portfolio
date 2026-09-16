import { Settings } from 'lucide-react';
import styles from './../IconAction.module.scss';

interface SettingsButtonProps {
  iconSize: number;
}

const SettingsButton = ({ iconSize }: SettingsButtonProps) => {
  const handleClick = () => {
    const dialog = document.getElementById('settings-dialog');

    if (dialog instanceof HTMLDialogElement) {
      dialog.showModal();
    }
  };

  return (
    <button
      type="button"
      className={`clipped-corners ${styles.iconAction}`}
      aria-label="Open settings"
      aria-haspopup="dialog"
      aria-controls="settings-dialog"
      onClick={handleClick}
    >
      <Settings size={iconSize} aria-hidden="true" />
    </button>
  );
};

export default SettingsButton;
