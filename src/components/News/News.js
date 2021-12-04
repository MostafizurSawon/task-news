import React from 'react';
import {Card, Col} from 'react-bootstrap';
import './News.css';

const News = (props) => {
    const {title,urlToImage, description} = props.article;
    console.log(props.article);
    return (
        <Col>
        <Card>
        <Card.Img className="custom-image mx-auto p-3" variant="top" fluid src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    );
};

export default News;