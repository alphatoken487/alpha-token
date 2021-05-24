import './App.css';
import React, { Component } from 'react'
import Hero from './sections/hero/Hero.js'
import ServicesOne from './sections/services/ServicesOne.js'
import TestimonialsOne from './sections/testimonials/TestimonialsOne.js'
import TeamOne from './sections/team/TeamOne.js'
import ContactCreative from './sections/contact/ContactCreative.js'
import AboutOne from './sections/about/AboutOne';
import Layout from './components/layout';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Layout
          isHome={true}
          sections={['home', 'token', 'features', 'roadmap', 'how to buy', 'contact']}
        >
          <Hero />
          <AboutOne />
          <ServicesOne />
          <TestimonialsOne />
          <TeamOne />
          <ContactCreative />
        </Layout>
      </div >
    );
  }
}

export default App;
