import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ data, onClick, chooseImage }) {
  return (
    <ul className={css.list}>
      <ImageGalleryItem
        data={data}
        onClick={onClick}
        chooseImage={chooseImage}
      />
    </ul>
  );
}
