import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

import './Posts.css';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.ws);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost.length) {
      console.log('Posts Next props', nextProps);
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  componentDidUpdate() {
    console.log('Posts component updated');
    this.props.fetchPosts(this.props.ws);
  }

  render() {
    const { posts } = this.props;
    // console.log(posts);
    // console.log(posts.length);
    const postItems = posts.map(post => {
      const currentTime = post.time;
      const date = new Date();
      date.setTime(currentTime)
      return (
        <div className="chatMessageWrapper" key={post.id}>
          <h3 className="chatUsername">{post.from}</h3>
          <p className="chatDate">{date.toLocaleString()}</p>
          <p className="chatMessage">{post.message}</p>
        </div>
      )
    });
    return (
      <div>
        <h1 className="chatHeader">Chat</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
})

export default connect(mapStateToProps, { fetchPosts })(Posts);