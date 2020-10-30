import { Action } from 'redux';
import data from '../../data.json';

export default function appReducer(state = data, action: Action) {
  switch (action.type) {
    case 'CLEAR_ALL':
      return (state = []);
    default:
      return state;
  }
}
