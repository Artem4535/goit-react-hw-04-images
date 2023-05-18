import React from 'react';
import Notiflix from 'notiflix';
import css from './Searchbar.module.css';

export class Searchbar extends React.Component {
  state = {
    inputValue: '',
  };

  handlerInput = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  handlerSumbitForm = e => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      return Notiflix.Notify.failure('Enter a valid name');
    }
    this.props.onSubmit(this.state.inputValue);
    this.reset();
  };

  reset = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className="form" onSubmit={this.handlerSumbitForm}>
          <button type="submit" className={css.button}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handlerInput}
            name="inputValue"
          />
        </form>
      </header>
    );
  }
}
