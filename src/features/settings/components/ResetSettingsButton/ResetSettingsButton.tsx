import { useState } from 'react';
import { Button, type ButtonProps } from '@/components/ui/Button/Button';
import { refreshCurrentPage } from '@/utils/refreshCurrentPage';
import { openDialog } from '@/utils/dialog';

export default function ResetSettingsButton({ disabled, ...props }: Omit<ButtonProps, 'onClick'>) {
  const [isResetting, setIsResetting] = useState(false);

  async function handleReset() {
    if (isResetting) return;
    setIsResetting(true);

    try {
      localStorage.removeItem('theme');
      localStorage.removeItem('reduceMotion');
      localStorage.removeItem('accentColor');
      await window.cookieStore.delete({ name: 'language', path: '/' });
      await refreshCurrentPage(() => openDialog('settings-dialog'));
    } catch (error) {
      console.error('Failed to reset settings', error);
    } finally {
      setIsResetting(false);
    }
  }

  return <Button {...props} disabled={disabled || isResetting} onClick={handleReset} />;
}
