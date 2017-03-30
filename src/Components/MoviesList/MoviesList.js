import React from 'react';
import Movie from '../Movie';

export default props => {
  console.log(props);
  if (typeof props.movies === 'undefined') {
    return null;
  } else {
    return (
      <div>
        {
          props.movies.map(movie => {
            return <Movie key={movie.id} movie={movie}/>
          })
        }
      </div>
    );
  }

};