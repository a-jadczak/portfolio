import { LanguageProvider } from '@/i18n/LanguageProvider';
import { useTranslations } from '@/i18n/useTranslations';
import type { Language } from '@/types/Language';
import Toggle from '@/components/ui/Toggle/Toggle';
import type { Nullable } from '@/types/Nullable';
import { useEffect, useState } from 'react';

interface Props {
  className?: string;
}

const setReducedMotion = (isChecked: boolean) => {
  document.documentElement.dataset.reducedMotion = String(isChecked);
  localStorage.setItem('reduceMotion', String(isChecked));
};

const ReduceMotionControlContent = ({ className }: Props) => {
  const t = useTranslations().t.settingsDialog.reduceMotion;
  const [preferReducedMotion, setPreferReducedMotion] = useState<Nullable<boolean>>(null);

  useEffect(() => {
    if (document.documentElement.dataset.reducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreferReducedMotion(document.documentElement.dataset.reducedMotion === 'true');
    }
  }, []);

  if (preferReducedMotion === null) return null;

  return (
    <Toggle
      aria-label={t.label}
      className={className}
      disabled={window.matchMedia('(prefers-reduced-motion: reduce)').matches}
      defaultChecked={preferReducedMotion}
      onChange={setReducedMotion}
    />
  );
};

const ReduceMotionControl = ({ lang, ...props }: Props & { lang: Language }) => (
  <LanguageProvider lang={lang}>
    <ReduceMotionControlContent {...props} />
  </LanguageProvider>
);

export default ReduceMotionControl;
