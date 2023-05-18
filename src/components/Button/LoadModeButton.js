import css from './Button.module.css';
export function LoadMoreButton({ onClick }) {
  return (
    <button onClick={onClick} className={css.btn} type="button">
      Load More
    </button>
  );
}
