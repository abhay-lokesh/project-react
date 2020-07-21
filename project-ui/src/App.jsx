import React from 'react';
import Main from './pages/Main';
import './App.scss';

const App = () => (
  <React.Fragment>
    <header className='header'>
      <p className='container'>Project UI</p>
    </header>
    <main className='container'>
      <Main />
    </main>
  </React.Fragment>
);

export default App;
