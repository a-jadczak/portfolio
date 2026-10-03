import { Button } from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import styles from './Dialog.module.scss';
import type { ComponentPropsWithoutRef } from 'react';
import type { Icon } from '@/types/Icon';
import { X } from 'lucide-react';
import Badge from '@/components/ui/Badge/Badge';

type DialogProps = ComponentPropsWithoutRef<'dialog'> & {
  id: string;
  title: string;
  titleId?: string;
  Icon?: Icon;
  closeLabel?: string;
};

const Dialog = ({
  id,
  title,
  titleId = `${id}-title`,
  Icon,
  closeLabel = `Close ${title.toLowerCase()}`,
  className = '',
  children,
  ...props
}: DialogProps) => (
  <dialog
    {...props}
    id={id}
    className={`clipped-corners ${styles.dialog} ${className}`}
    aria-labelledby={titleId}
  >
    <header className={styles.header}>
      {Icon ? (
        <>
          <Icon size={28} aria-hidden="true" />
          <Heading as="h2" size="small" id={titleId}>
            {title}
          </Heading>
        </>
      ) : (
        <div className={styles.badgeContainer}>
          <Badge variant={'secondary'} title={'Project / 01'} className={styles.badge} />
        </div>
      )}
      <form method="dialog">
        <Button type="submit" iconOnly aria-label={closeLabel}>
          <X size={18} aria-hidden="true" />
        </Button>
      </form>
    </header>
    {children}
  </dialog>
);

export default Dialog;
