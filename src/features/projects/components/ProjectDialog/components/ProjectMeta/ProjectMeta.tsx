import type { ProjectMetadata } from '@/types/ProjectMetadata';
import { formatWithComma } from '@/features/projects/components/ProjectDialog/utils/formatWithComma';
import styles from './ProjectMeta.module.scss';
import type { Nullable } from '@/types/Nullable';
import { useTranslations } from '@/i18n/useTranslations';

interface Props {
  metadata: Nullable<ProjectMetadata>;
  createdAt: Date;
  licenseInfo: { name: string };
  className?: string;
}

const ProjectMeta = ({ metadata, createdAt, licenseInfo, className = '' }: Props) => {
  const t = useTranslations().t.pages.projects.projectDialog.metadata;
  const items = [
    { id: 'type', value: metadata?.type.map(formatWithComma).join('') ?? t.unknown },
    { id: 'createdAt', value: new Date(createdAt).getFullYear() },
    { id: 'status', value: metadata?.status ?? t.unknown },
    { id: 'license', value: licenseInfo?.name ?? t.unknown },
  ] as const;

  return (
    <div className={`${styles.metaWrapper} ${className}`}>
      <div className={styles.metaContainer}>
        {items.map(({ id, value }) => (
          <div className={styles.metaItem} key={id}>
            <span className={styles.metaLabel}>{t.labels[id]}</span>
            <span className={styles.metaValue}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMeta;
