import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';

import store from '../Store';
import Posts from './Posts';
import PostForm from './Postform';
import { connectToServer } from '../actions/websocketActions';

class Chat extends Component {
  componentDidMount() {
    this.props.connectToServer();
    console.log('Chat props');
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      console.log('Chat next props');
      console.log(nextProps);
    }
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

Chat.propTypes = {
  connectToServer: PropTypes.func.isRequired,
  websocket: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  websocket: state.websocket.websocket,
})

export default connect(mapStateToProps, { connectToServer })(Chat);