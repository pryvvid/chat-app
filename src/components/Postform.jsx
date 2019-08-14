import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createPost } from '../actions/postActions';
import './Postform.css';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      from: this.state.username,
      message: this.state.message,
    };

    // Call action
    this.props.createPost(post);
    document.getElementById("message").value = '';
  }

  render() {
    return (
      <div>
        <h1>Write message</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <br />
            <input className="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </div>
          <br />
          <div>
            <label htmlFor="message">Message: </label>
            <br />
            <textarea className="message" id="message" name="message" value={this.state.message} onChange={this.handleChange} />
          </div>
          <br />
          <button className="submitButton" type="submit">Submit</button>
          
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(PostForm);