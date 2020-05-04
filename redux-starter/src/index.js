import store from './store';
import { bugAdded, bugResolved } from './actions';

// state = reducer(state, action)
// notify the subscribers

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugResolved(1));

// unsubscribe();
// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

console.log(store.getState());
