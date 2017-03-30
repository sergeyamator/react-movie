import config from './config';

export const requestMovie = movie => dispatch => {
  dispatch({
    type: 'REQUEST_MOVIE'
  });

  fetch(config.movieApiUrl + movie)
    .then(function(response) {
      return response.json();
    })
    .then((res) => dispatch({
      type: 'RECEIVE_MOVIE',
      movie: res.results
    }))
    .catch((err) => console.log(err));
};

