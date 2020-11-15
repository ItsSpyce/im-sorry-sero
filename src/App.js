import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledApp, theme } from './styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BackgroundBlackSquare, BackgroundBlackAngle, Body } from './styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Character from './pages/Character';
import NotFound from './pages/NotFound';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <StyledApp>
        <BackgroundBlackSquare />
        <BackgroundBlackAngle />
        <Body>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id">
              <Character />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Body>
        <Navbar />
        <Footer />
      </StyledApp>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
