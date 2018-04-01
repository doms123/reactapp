import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <header>
      <div className="wrapInner">
        <h1><Link to="/">TODO APP</Link></h1>
      </div>
    </header>
  );
}