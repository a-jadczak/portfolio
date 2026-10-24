import { Button } from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import styles from './Dialog.module.scss';
import { useRef, type ComponentPropsWithoutRef } from 'react';
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
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <dialog
      {...props}
      id={id}
      ref={dialogRef}
      className={`${styles.dialog} ${className}`}
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
            <Badge variant={'secondary'} title={title} className={styles.badge} />
          </div>
        )}
        <form
          method="dialog"
          onSubmit={() => dialogRef.current?.scrollTo({ top: 0, behavior: 'instant' })}
        >
          <Button type="submit" iconOnly aria-label={closeLabel}>
            <X size={18} aria-hidden="true" />
          </Button>
        </form>
      </header>
      {children}
    </dialog>
  );
};

export default Dialog;
