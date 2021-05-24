import './App.css';
import React, { Component } from 'react'
import Hero from './sections/hero/Hero.js'
import ServicesOne from './sections/services/ServicesOne.js'
import ContactCreative from './sections/contact/ContactCreative.js'
import AboutOne from './sections/about/AboutOne';
import Layout from './components/layout';
import Contribute from './sections/contribute'

class App extends Component {

  render() {

    return (
      <div className="App">
        <Layout
          isHome={true}
          sections={['home', 'token', 'contribute', 'features', 'contact']}
        >
          <Hero />
          <AboutOne />
          <Contribute />
          <ServicesOne />
          <ContactCreative />
        </Layout>
      </div >
    );
  }
}

export default App;
