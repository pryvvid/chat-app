import { FETCH_POSTS, NEW_POST, CONNECT_TO_SERVER } from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default function(state = initialState, action) {
  console.log('reducer');
  switch (action.type) {
    case FETCH_POSTS:
      console.log('from reducer state items', state.items.length);
      console.log('from reducer action payload', action.payload.length);
      return {
        ...state,
        items: [action.payload, ...state.items].flat(),
      }
    case NEW_POST:
      return {
        ...state,
        items: [action.payload, ...state.items].flat(),
        item: action.payload
      }
    default:
      return state;
  }
}