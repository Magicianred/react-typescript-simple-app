import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteRoutes from './Sections/SiteRoutes';
import Header from './Partials/Header';
import Footer from './Partials/Footer';
import Container from 'react-bootstrap/Container';
import './App.css';

interface AppProps {
  siteName: string;
};

/**
 * This fuction startup the application
 * @function App
 */
class App extends Component<AppProps> {

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: AppProps) {
      super(props);
  }

  render() {
    return (
      <Container className="App">
        <Header title={this.props.siteName} />
        <Router>
            <SiteRoutes />
        </Router>
        <Footer />
      </Container>
    );
  }
}

export default App;
