const initState = {
  listItem: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_LIST_ITEM":
      return {
        ...initState,
        listItem: action.payload,
      };
    default:
      return initState;
  }
};
