const initState = {
  reminders: []
};

const store = (state = initState, action) => {
  switch (action.type) {
    case 'STORE_REMINDERS':
      return {
        ...state,
        reminders: action.payload
      };
    default: return state;
  }
};

export default store;
