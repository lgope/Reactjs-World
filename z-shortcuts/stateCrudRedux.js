export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SAVE_TODAY_WORKS:
      return {
        userWorks: state.userWorks.concat(action.payload),
        // add first index 👉 state.data.push(action.payload);
        // add last index 👉 state.data.unshift(action.payload);
        
      };

    case actions.GET:
      return {
        allWorks: action.payload,
      };

    case actions.UPDATE:
      return {
        userWorks: state.userWorks.map(work =>
          work._id === action.payload._id ? { ...action.payload } : work
        ),
      };

    case actions.DELETE:
      return {
        allWorks: state.allWorks.filter(work => work._id != action.payload),
      };
  }
}
