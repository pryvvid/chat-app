import { FETCH_POSTS, NEW_POST, CONNECT_TO_SERVER } from './types';

export const fetchPosts = () => dispatch => {
  console.log('fetching...');
  // const url = 'ws://st-chat.shas.tel';
  const url = 'wss://wssproxy.herokuapp.com/';
  let webSocket = new WebSocket(url);
  // axios.get(url)
  //   .then(posts => dispatch({
  //     type: FETCH_POSTS,
  //     payload: posts.data,
  //   }));
  webSocket.onopen = (event) => {
    console.log('Connected');
  }

  webSocket.onmessage = (event) => {
    const { data } = event;
    // console.log(data);
    dispatch({
      type: FETCH_POSTS,
      payload: JSON.parse(data),
    })
  }

  webSocket.onclose = (event) => {
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason);
    webSocket = new WebSocket(url);
  }
}

export const createPost = (postData) => dispatch => {
  console.log('create post');
  // const url = 'ws://st-chat.shas.tel';
  const url = 'wss://wssproxy.herokuapp.com/';

  const webSocket = new WebSocket(url);

  webSocket.onopen = (event) => {
    console.log('Connected create post');
    webSocket.send(JSON.stringify(postData));
  }
  // axios.post(url, postData)
  //   .then(post => dispatch({
  //       type: NEW_POST,
  //       payload: post.data,
  //   }));
}