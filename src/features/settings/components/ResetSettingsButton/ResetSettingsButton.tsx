import { Button, type ButtonProps } from '@/components/ui/Button/Button';
import { refreshCurrentPage } from '@/utils/refreshCurrentPage';
import { disableDialogControls, openDialog } from '@/utils/dialog';

export default function ResetSettingsButton({ ...props }: Omit<ButtonProps, 'onClick'>) {
  async function handleReset() {
    try {
      disableDialogControls('settings-dialog');
      ['theme', 'reduceMotion', 'accentColor'].forEach((key) => localStorage.removeItem(key));
      await window.cookieStore.delete({ name: 'language', path: '/' });
      await refreshCurrentPage(() => openDialog('settings-dialog'));
    } catch (error) {
      console.error('Failed to reset settings', error);
    }
  }

  return <Button {...props} onClick={handleReset} />;
}
