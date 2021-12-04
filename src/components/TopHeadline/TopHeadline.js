import React, { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import News from '../News/News';

const TopHeadline = () => {

    const [articles, setArticles] = useState([]);

    useEffect( () => {
        // https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=API_KEY
        // d8dacce39941410aa7080574d5c16d22
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d8dacce39941410aa7080574d5c16d22';
        fetch(url)
        .then(res => res.json())
        .then(data =>setArticles(data.articles))
    }, [])
    return (
        <Row xs={1} md={3} className="g-4 my-1">
            {
                articles.slice(0,12).map(article => <News article ={article}></News>)
            }
        </Row>
    );
};

export default TopHeadline;