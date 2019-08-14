import { CONNECT_TO_SERVER } from './types';

export const connectToServer = () => dispatch => {
  console.log('Connecting to websocket');
  dispatch({
      type: CONNECT_TO_SERVER,
      payload: new WebSocket('wss://wssproxy.herokuapp.com/'),
    })
}