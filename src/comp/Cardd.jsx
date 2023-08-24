import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Cardd = (props) => {
  return (
    <div className='cardd'>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.namee}</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cardd
