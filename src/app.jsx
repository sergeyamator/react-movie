import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './Components/SerachBar';

import { requestMovie } from './actions';

import MoviesList from './Components/MoviesList';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movies: state.movie.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: searchText => {
      dispatch(requestMovie(searchText))
    }
  }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar getMovie={this.props.getMovie}/>
        <MoviesList movies={this.props.movies} />
      </div>
    )
  }
}
