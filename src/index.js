import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';
import store from './Store';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      webSocket: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <PostForm />
          <br />
          <Posts />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
