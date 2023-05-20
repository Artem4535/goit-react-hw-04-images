import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './Button/LoadModeButton';
import { FetchPhoto } from './Api/Api';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export function App() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [largeImage, setLargeImage] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    setLoading(true);
    FetchPhoto(inputValue, page)
      .then(({ hits, total }) => {
        if (hits.length === 0) {
          Notiflix.Notify.failure('Not found');
          return;
        }
        setData(prevState => [...prevState, ...hits]);

        setTotal(total);
      })
      .catch(error => console.log(error.message))
      .finally(() => setLoading(false));
  }, [inputValue, page]);

  const handlerSumbitForm = value => {
    setInputValue(value);
    setData([]);
    setPage(1);
  };

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const chooseImage = url => {
    setLargeImage(url);
  };

  const dataLength = data.length > 0;

  return (
    <>
      <Searchbar onSubmit={handlerSumbitForm} />
      <ImageGallery
        data={data}
        onClick={toggleModal}
        chooseImage={chooseImage}
      />
      {loading && <Loader />}
      {dataLength && total > page * 12 && (
        <LoadMoreButton onClick={incrementPage} />
      )}
      {showModal && <Modal largeImage={largeImage} toggleModal={toggleModal} />}
    </>
  );
}

// export class App extends React.Component {
//   state = {
//     inputValue: '',
//     data: [],
//     page: 1,
//     total: 0,
//     largeImage: '',
//     error: '',
//     showModal: false,
//     loading: false,
//   };

//   componentDidUpdate(_, prevState) {
//     const { inputValue, page } = this.state;
//     if (inputValue !== prevState.inputValue || prevState.page !== page) {
//       this.setState({ loading: true });
//       FetchPhoto(inputValue, page)
//         .then(({ hits, total }) => {
//           if (hits.length === 0) {
//             Notiflix.Notify.failure('Not found');
//             return;
//           }
//           this.setState(prevState => ({ data: [...prevState.data, ...hits] }));
//           this.setState({ total });
//         })
//         .catch(error => console.log(error.message))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//   handlerSumbitForm = value => {
//     this.setState({ inputValue: value, data: [], page: 1 });
//   };

//   incrementPage = () => {
//     this.setState(prevState => {
//       console.log(this.state.page);
//       return { page: prevState.page + 1 };
//     });
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   chooseImage = url => {
//     this.setState({ largeImage: url });
//   };

//   render() {
//     const { data, showModal, largeImage, loading, page, total } = this.state;
//     const dataLength = data.length > 0;
//     return (
//       <>
//         <Searchbar onSubmit={this.handlerSumbitForm} />
//         <ImageGallery
//           data={data}
//           onClick={this.toggleModal}
//           chooseImage={this.chooseImage}
//         />
//         {loading && <Loader />}
//         {dataLength && total > page * 12 && (
//           <LoadMoreButton onClick={this.incrementPage} />
//         )}
//         {showModal && (
//           <Modal largeImage={largeImage} toggleModal={this.toggleModal} />
//         )}
//       </>
//     );
//   }
// }
