const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    // case typeName:
    //   return { ...state, ...payload };

    default:
      return state;
  }
};
