import { useState } from 'react';
import styles from './Skeleton.module.scss';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const SkeletonImage = ({ src, alt }: Pick<Props, 'src' | 'alt'>) => {
  const [loading, setLoading] = useState(true);
  const finishLoading = () => setLoading(false);

  return (
    <>
      <img
        className={styles.image}
        ref={(image) => {
          // Cached successes and failures can settle before React attaches its handlers.
          if (image?.complete) finishLoading();
        }}
        src={src}
        alt={alt}
        draggable={false}
        onLoad={finishLoading}
        onError={finishLoading}
      />
      {loading && <span className={styles.placeholder} aria-hidden="true" />}
    </>
  );
};

const Skeleton = ({ src, alt, className = '' }: Props) => (
  <div className={`${styles.skeleton} ${className}`}>
    <SkeletonImage key={src} src={src} alt={alt} />
  </div>
);

export default Skeleton;
