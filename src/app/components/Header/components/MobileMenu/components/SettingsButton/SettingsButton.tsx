import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import { openDialog } from '@/utils/dialog';

interface SettingsButtonProps {
  iconSize: number;
}

const SettingsButton = ({ iconSize }: SettingsButtonProps) => {
  const handleClick = () => {
    openDialog('settings-dialog');
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
