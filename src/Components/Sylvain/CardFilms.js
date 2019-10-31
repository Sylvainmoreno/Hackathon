import React from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';
  
  const CardFilms = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={props.image} alt={props.title} />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default CardFilms;

