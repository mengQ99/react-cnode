import React from 'react';
import RouterIndex from './router/index';
import MainHeader from './view/common/main-header';
import MainFooter from './view/common/main-footer';
import './view/index.css';

function App() {
  return (
    <div className="page-wrap">
      <MainHeader/>
        <main className="main">
          <RouterIndex />
        </main>
      <MainFooter/>
    </div>
  );
}

export default App;
