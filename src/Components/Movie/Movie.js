import React from 'react';

export default props => {
  const {poster_path, name, overview, backdrop_path} = props.movie;
  return(
    <article className="movie">
      <img src={'http://image.tmdb.org/t/p/w185/' + backdrop_path} />
      <h2>{name}</h2>
      <p className="description">{overview}</p>
    </article>
  );
};