import { Action } from 'redux';
import data from '../../data.json';

const initialState = data;

export default function appReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'CLEAR_ALL':
      return (state = []);
    default:
      return state;
  }
}
