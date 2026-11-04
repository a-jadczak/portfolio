import Toggle from '@/components/ui/Toggle/Toggle';
import type { Nullable } from '@/types/Nullable';
import { useEffect, useState } from 'react';

interface Props {
  className?: string;
}

const ReduceMotionControl = ({ className }: Props) => {
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
      aria-label="Reduce motion"
      className={className}
      disabled={window.matchMedia('(prefers-reduced-motion: reduce)').matches}
      defaultChecked={preferReducedMotion}
      onChange={(isChecked) => {
        document.documentElement.dataset.reducedMotion = String(isChecked);
        localStorage.setItem('reduceMotion', String(isChecked));
      }}
    />
  );
};

export default ReduceMotionControl;
