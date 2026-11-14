import type { ProjectMetadata } from '@/types/ProjectMetadata';
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
  const t = useTranslations().t.pages.projects;
  const keywords: Readonly<Record<string, string>> = t.keywords;
  const items = [
    {
      id: 'type',
      value:
        metadata?.type.map((type) => keywords[type] ?? type).join(', ') ??
        t.projectDialog.metadata.unknown,
    },
    { id: 'createdAt', value: new Date(createdAt).getFullYear() },
    {
      id: 'status',
      value: metadata
        ? (keywords[metadata.status] ?? metadata.status)
        : t.projectDialog.metadata.unknown,
    },
    { id: 'license', value: licenseInfo?.name ?? t.projectDialog.metadata.unknown },
  ] as const;

  return (
    <div className={`${styles.metaWrapper} ${className}`}>
      <div className={styles.metaContainer}>
        {items.map(({ id, value }) => (
          <div className={styles.metaItem} key={id}>
            <span className={styles.metaLabel}>{t.projectDialog.metadata.labels[id]}</span>
            <span className={styles.metaValue}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMeta;
