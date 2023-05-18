import React from 'react';
import { createPortal } from 'react-dom';
import css from './modal.module.css';
const modalRoot = document.querySelector('#modal-root');
console.log(modalRoot);
export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEscape);
  }

  closeOnEscape = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  clickOnbackDrop = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };
  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.clickOnbackDrop}>
        <div className={css.modal}>
          <img src={this.props.largeImage} alt="vfd" />
        </div>
      </div>,
      modalRoot
    );
  }
}
