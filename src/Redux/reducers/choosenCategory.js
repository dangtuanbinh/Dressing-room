let initialState = "topclothes";

const ChoosenCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      state = action.payload;
    //   Tại sao lại không dùng được  [...state]
      return state;
    default:
      return state;
  }
};

export default ChoosenCategoryReducer;
