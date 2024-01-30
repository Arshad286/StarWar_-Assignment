import React from 'react'

function MovieDetails({movie}) {
  return (
    <div>
    <h2 style={{textShadow:"1px 1px grey"}}>{`Episode ${movie.episode_id} - ${movie.title}`}</h2>
    <p className='Description'> {`${movie.opening_crawl}`}</p>
    <p className='Director'>{`Director: ${movie.director}`}</p>
    
  </div>
  )
}

export default MovieDetails