import Heading from '@/components/ui/Heading/Heading';
import Text from '@/components/ui/Text/Text';
import styles from './ConnectionCard.module.scss';
import cardStyles from '@/components/ui/Card/Card.module.scss';
import { connections, type ConnectionId } from '../../config/connections';

export interface ConnectionCardProps {
  connectionId: ConnectionId;
}

const ConnectionCard = ({ connectionId }: ConnectionCardProps) => {
  const {
    icon: Icon,
    title,
    description,
    role,
    actionLabel,
    action,
    actionIcon: ActionIcon,
    iconSize,
  } = connections[connectionId];

  return (
    <div className={`${styles.container} ${styles[role]}`}>
      <div className={styles.iconContainer} aria-hidden={true}>
        <Icon size={32} />
      </div>
      <div className={styles.contentContainer}>
        <Heading as="h3" size="extra-small" className={styles.title}>
          {title}
        </Heading>
        <Text variant="secondary" size="small" className={styles.description}>
          {description}
        </Text>
      </div>
      <div className={`${cardStyles.card} ${cardStyles.bordered} ${styles.actionCard}`}>
        {actionLabel}
        <ActionIcon
          onClick={(e) => {
            if (action) {
              action();
              e.currentTarget.classList.add(styles.pressed);
            }
          }}
          onAnimationEnd={(e) => {
            e.currentTarget.classList.remove(styles.pressed);
          }}
          className={styles.actionIcon}
          role="button"
          size={iconSize}
          data-active={action ? true : false}
        />
      </div>
    </div>
  );
};

export default ConnectionCard;
