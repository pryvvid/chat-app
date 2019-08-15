import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';
import store from './Store';

import './style.css';

const URL = 'wss://wssproxy.herokuapp.com/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ws: new WebSocket(URL)
    };
  }

  componentDidMount() {
    this.state.ws.onopen = () => {
      console.log('App ws connected', this.state.ws);
    }

    this.state.ws.addEventListener('close', () => {
      console.log('App ws disconnected')
      setTimeout(() => {
        this.setState({
          ws: new WebSocket(URL),
        })
      }, 1000);  
    });
  }

  componentDidUpdate() {
    console.log('App component updated');
    this.state.ws.onopen = () => {
      console.log('App ws reconnected', this.state.ws);
    }

    this.state.ws.addEventListener('close', () => {
      console.log('App ws disconnected')
      setTimeout(() => {
        this.setState({
          ws: new WebSocket(URL),
        })
      }, 1000);
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="appWrapper">
          <PostForm ws={this.state.ws}/>
          <br />
          <Posts ws={this.state.ws}/>
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
