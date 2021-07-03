import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsById, News } from '../services';
import { Text, parseText } from '../utils';
import Icon from './Icon';

import './Detail.css';

export default function Detail() {
  let { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<News>();
  const [texts, setTexts] = useState<Text[]>([]);

  useEffect(() => {
    const getArticle = async () => {
      setLoading(true);
      const news = await getNewsById(id);
      setArticle(news);
      const formatTexts = parseText(news.transcript);
      setTexts(formatTexts);
      setLoading(false);
    };
    getArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-wrap">
        <Icon type="loading" className="loading" size={50} />
      </div>
    );
  }

  return (
    <div className="detail">
      <div>
        {texts.map(({ idx, type, value }) => {
          return (
            <p className={type} key={idx}>
              {value}
            </p>
          );
        })}
      </div>
      {article?.source && (
        <audio controls src={article.src} className="audio" />
      )}
    </div>
  );
}
