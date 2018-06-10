import React from 'react';
import { css } from 'glamor';

// {item} is from props object 

const NewsItem = ({item}) => {

    let news_item = css({
        padding: '20px',
        boxSizing: 'border-box',
        borderBottom: '1px solid grey'
    })

    return (
        <div {...news_item}>
            <h3>{ item.title }</h3>
            <div>{ item.feed }</div>
        </div>
    )
}

export default NewsItem;

