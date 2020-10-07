export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SAVE_TODAY_WORKS:
      return {
        userWorks: state.userWorks.concat(action.payload),
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
