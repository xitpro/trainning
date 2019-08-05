import React from 'react';
import './page404.css';

const Page404 = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <a href="/login">Homepage</a>
      </div>
    </div>
  );
};

export default Page404;
