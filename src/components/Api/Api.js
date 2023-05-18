export function FetchPhoto(inputValue, page) {
  const URL = `https://pixabay.com/api/?key=34736091-07dbf1d110e7bfeee2e88aa1e&q=${inputValue}&per_page=12&page=${page}`;

  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('sfds'));
  });
}
