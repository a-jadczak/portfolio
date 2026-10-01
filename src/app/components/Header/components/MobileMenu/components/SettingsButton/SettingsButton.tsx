import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

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
    <Button
      iconOnly
      aria-label="Open settings"
      aria-haspopup="dialog"
      aria-controls="settings-dialog"
      onClick={handleClick}
    >
      <Settings size={iconSize} aria-hidden="true" />
    </Button>
  );
};

export default SettingsButton;
