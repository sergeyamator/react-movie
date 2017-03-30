import React from 'react';

export default props => {
  let input;
  return(
    <form onSubmit={e => {
      e.preventDefault();
      props.getMovie(input.value)
    }}>
      <i
        className="fa fa-search" aria-hidden="true"
        onClick={() => {
          props.getMovie(input.value)
        }}
      />
      <input
        type="text"
        placeholder="Find movie"
        ref={ref => input = ref}
      />
    </form>
  );
}