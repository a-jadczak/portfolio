import { Button } from '@/components/ui/Button/Button';
import styles from './Gallery.module.scss';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface GalleryProps {
  banner: string;
  gallery: string[];
}

const Gallery = ({ banner, gallery }: GalleryProps) => {
  const images = [banner, ...gallery];
  const [index, setIndex] = useState(0);
  const imageSrc = images[index];

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`${styles.galleryContainer}`}>
      <div className={`${styles.itemPreview}`}>
        <img
          className={`clipped-corners  ${styles.previewImage}`}
          src={imageSrc}
          alt="Preview Image"
          draggable={false}
        />
        <Button onClick={previousImage} variant="default" className={styles.arrowButton} iconOnly>
          <ArrowLeft size={24} />
        </Button>
        <Button onClick={nextImage} variant="default" className={styles.arrowButton} iconOnly>
          <ArrowRight size={24} />
        </Button>
      </div>
      <span className={styles.index}>
        {index + 1} / {images.length}
      </span>
      <ul className={styles.galleryCarousel}>
        {images.map((image, _index) => (
          <li
            key={_index}
            className={`clipped-corners ${styles.galleryItem}`}
            role="button"
            onClick={() => setIndex(_index)}
            data-active={index === _index}
          >
            <img
              className={`${styles.galleryImage}`}
              src={image}
              alt={`Preview ${_index + 1}`}
              draggable={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
