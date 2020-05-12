import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LinkInput from './components/LinkInput';
import Blurb from './components/Blurb';
import Cta from './components/Cta';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <LinkInput />
      <Blurb />
      <Cta />
    </React.Fragment>
  );
}

export default App;
