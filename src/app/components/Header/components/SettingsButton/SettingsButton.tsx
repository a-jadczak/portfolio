import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import { openDialog } from '@/utils/dialog';
import { useTranslations } from '@/i18n/useTranslations';

interface SettingsButtonProps {
  iconSize: number;
}

const SettingsButton = ({ iconSize }: SettingsButtonProps) => {
  const { t } = useTranslations();
  const handleClick = () => {
    openDialog('settings-dialog');
  };

  return (
    <Button
      iconOnly
      aria-label={t.header.settings.settingsLabel}
      aria-haspopup="dialog"
      aria-controls="settings-dialog"
      onClick={handleClick}
    >
      <Settings size={iconSize} aria-hidden="true" />
    </Button>
  );
};

export default SettingsButton;
