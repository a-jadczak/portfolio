import { Button } from '@/components/ui/Button/Button';
import styles from './Gallery.module.scss';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  'https://picsum.photos/400/200',
  'https://picsum.photos/400/200',
  'https://picsum.photos/400/200',
  'https://picsum.photos/400/200',
  'https://picsum.photos/400/200',
  'https://picsum.photos/400/200',
  'https://picsum.photos/400/200',
];

const Gallery = () => {
  return (
    <div className={`${styles.galleryContainer}`}>
      <div className={`${styles.itemPreview}`}>
        <img
          className={`clipped-corners  ${styles.previewImage}`}
          src="https://picsum.photos/400/200"
          alt="Preview"
          draggable={false}
        />
        <Button variant="default" className={styles.arrowButton} iconOnly>
          <ArrowLeft size={24} />
        </Button>
        <Button variant="default" className={styles.arrowButton} iconOnly>
          <ArrowRight size={24} />
        </Button>
      </div>
      <span>2 / 5</span>
      <ul className={styles.galleryCarousel}>
        {images.map((image, index) => (
          <li key={index} className={`clipped-corners ${styles.galleryItem}`}>
            <img
              className={`clipped-corners  ${styles.galleryImage}`}
              src={image}
              alt={`Preview ${index + 1}`}
              draggable={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
