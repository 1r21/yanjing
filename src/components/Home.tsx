import React, { useEffect, useState } from 'react';
import { getNews, News } from '../services';

import Article from './Article';
import './Home.css';
import Icon from './Icon';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<News[]>([]);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const { list } = await getNews();
      setArticles(list);
      setLoading(false);
    };
    fetch();
  }, []);

  if (loading) {
    return (
      <div className="loading-wrap">
        <Icon type="loading" className="loading" size={50} />
      </div>
    );
  }

  return (
    <ul className="home">
      {articles.map((item) => (
        <Article {...item} key={item.id} />
      ))}
    </ul>
  );
}
