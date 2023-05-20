import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ largeImage, toggleModal }) {
  useEffect(() => {
    const closeOnEscape = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [toggleModal]);

  const clickOnbackDrop = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={clickOnbackDrop}>
      <div className={css.modal}>
        <img src={largeImage} alt="vfd" />
      </div>
    </div>,
    modalRoot
  );
}

// export class Modal extends React.Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.closeOnEscape);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.closeOnEscape);
//   }

//   closeOnEscape = e => {
//     if (e.code === 'Escape') {
//       this.props.toggleModal();
//     }
//   };
//   clickOnbackDrop = e => {
//     if (e.currentTarget === e.target) {
//       this.props.toggleModal();
//     }
//   };
//   render() {
//     return createPortal(
//       <div className={css.overlay} onClick={this.clickOnbackDrop}>
//         <div className={css.modal}>
//           <img src={this.props.largeImage} alt="vfd" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
