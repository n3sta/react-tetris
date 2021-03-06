import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import styled from 'styled-components';

import store from './redux/store';
import Game from './components/Game/Game';
import Homepage from './components/Homepage/Homepage';
import Gameover from './components/Game/Gameover/Gameover';
import { purple400, purple300 } from './styled';

const Wrapper = styled.div`
  position: relative;
  margin: 15px auto;
  min-height: 600px;
  width: 311px;
  border: 5px solid ${purple400};
  background-color: ${purple300};
  color: ${purple400};
`;

class App extends Component {
  componentWillMount() {
    if (!('indexedDB' in window)) {
      window.alert("Your browser doesn't support a stable version of IndexedDB.")
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <Router>
            <>
              <Route path="/" exact component={Homepage} />
              <Route path="/game" component={Game} />
              <Route path="/gameover" component={Gameover} />
            </>
          </Router>
        </Wrapper>
      </Provider>
    );
  }
}

export default App;
