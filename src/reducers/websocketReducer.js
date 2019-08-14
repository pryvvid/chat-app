import { CONNECT_TO_SERVER } from '../actions/types';

const initialState = {
  websocket: new WebSocket('wss://wssproxy.herokuapp.com/'),
  connected: true,
};

export default function(state = initialState, action) {
  console.log('websocket reducer');
  switch (action.type) {
    case CONNECT_TO_SERVER:
      return {
        ...state,
        websocket: action.payload,
        connected: true,
      }
    default:
      return state;
  }
}