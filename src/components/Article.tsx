import React from 'react';
import { Link } from 'react-router-dom';

import { News } from '../services';
import './Article.css';

export default function Article({ id, cover, title, date }: News) {
  return (
    <li className="article-wrap">
      <Link to={`/detail/${id}`}>
        <img src={cover} alt={title} />
        <p className="text">{date}</p>
        <p className="text title">{title}</p>
      </Link>
    </li>
  );
}
