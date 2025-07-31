/*import React from 'react'
import './cardMovie.css'
import { Button, Card } from 'react-bootstrap';

const CardMovie = ({movie}) => {
  return (
    <div className='movie'>
     {""}
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} height={"400px"} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  );
};

export default CardMovie
*/

import React from 'react'
import './cardMovie.css'
import { Button, Card } from 'react-bootstrap';
import Rate from '../filterRate/FilterRate'
const CardMovie = ({ movie }) => {
  return (
    <div className='movie'>
      <Card className="movie-card">
        <div className="card-img-container">
          <Card.Img variant="top" src={movie.posterUrl} />
        </div>
        <Card.Body className="card-body-custom">
          <Card.Title className="card-title-custom">{movie.title}</Card.Title>
          <Rate isRating={true} rate={movie.rate}/>
          <Card.Text className="card-text-custom">
            {movie.description}
          </Card.Text>
          <Button variant="primary" className="btn-custom">
            Voir détails
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardMovie;