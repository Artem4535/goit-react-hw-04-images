import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ data, onClick, chooseImage }) {
  return (
    <>
      {data.map(({ id, webformatURL }) => (
        <li
          key={id}
          onClick={() => {
            onClick();
            chooseImage(webformatURL);
          }}
        >
          <img className={css.image} alt={'dsad'} src={webformatURL} />
        </li>
      ))}
    </>
  );
}
