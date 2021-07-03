import React from 'react';
import { useHistory } from 'react-router-dom';
import Icon from './Icon';

import './Nav.css';

export default function Nav() {
  let history = useHistory();

  function handleClick() {
    if (history) {
      history.go(-1);
    }
  }

  return (
    <div className="nav">
      <Icon
        type="left"
        className="back"
        color="#ccc"
        size={20}
        title="back"
        onClick={handleClick}
      />
    </div>
  );
}
