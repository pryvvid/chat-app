import { FETCH_POSTS, NEW_POST, CLEAR_POSTS } from './types';

export const fetchPosts = (ws) => dispatch => {
  console.log('fetching...');
  // const url = 'ws://st-chat.shas.tel';
  //const url = 'wss://wssproxy.herokuapp.com/';
  // let webSocket = new WebSocket(url);
  // webSocket.onopen = (event) => {
  //   console.log('Connected');
  // }

  ws.onmessage = (event) => {
    const { data } = event;
    // console.log(data);
    dispatch({
      type: FETCH_POSTS,
      payload: JSON.parse(data),
    })
  }

  ws.addEventListener('close', (event) => {
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason);        
    dispatch({
        type: CLEAR_POSTS,
      });
    });

  // webSocket.onclose = (event) => {
  //   console.log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason);
  //   webSocket = new WebSocket(url);
  // }

  // function connect(url){
  //   const ws = new WebSocket(url);

  //   ws.onopen = (event) => {
  //     console.log('Connected');
  //   }

  //   ws.onmessage = (event) => {
  //     const { data } = event;
  //     // console.log(data);
  //     dispatch({
  //       type: FETCH_POSTS,
  //       payload: JSON.parse(data),
  //     });
  // }
  //   ws.onclose = (event) => {
  //       console.log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason);        
  //       setTimeout(() =>{
  //         dispatch({
  //           type: CLEAR_POSTS,
  //         });
  //         connect(url);
  //       }, 1000);
  //   };
  // }

  // connect(url);
}

export const createPost = (postData, ws) => dispatch => {
  console.log('create post');
  // const url = 'ws://st-chat.shas.tel';
  //const url = 'wss://wssproxy.herokuapp.com/';

  //const webSocket = new WebSocket(url);
  console.log('WS state before', ws.readyState);
  ws.send(JSON.stringify(postData));
  console.log('WS state after', ws.readyState);
  // webSocket.onopen = () => {
  //   console.log('Connected create post');
  //   webSocket.send(JSON.stringify(postData));
  // }
}