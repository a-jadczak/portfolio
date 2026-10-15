import type { ProjectMetadata } from '@/types/ProjectMetadata';
import { formatWithComma } from '@/features/projects/components/ProjectDialog/utils/formatWithComma';
import styles from './ProjectMeta.module.scss';

interface Props {
  metadata: ProjectMetadata | null;
  createdAt: Date;
  licenseInfo: { name: string };
}

const ProjectMeta = ({ metadata, createdAt, licenseInfo }: Props) => {
  const items = [
    { label: 'Type', value: metadata?.type.map(formatWithComma).join('') },
    { label: 'Created At', value: new Date(createdAt).getFullYear() },
    { label: 'Status', value: metadata?.status },
    { label: 'License', value: licenseInfo?.name },
  ];

  return (
    <div className={styles.metaContainer}>
      {items.map(({ label, value }) => (
        <div className={styles.metaItem} key={label}>
          <span className={styles.metaLabel}>{label}</span>
          <span className={styles.metaValue}>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectMeta;
