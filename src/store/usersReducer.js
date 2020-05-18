const initialState = [{ name: "Laurynas" }, { name: "Jayant" }];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "add_ta": {
      return [...state, action.payload];
    }
    default: {
      // console.log("Somehow this action wasn't handled?", action);
      return state;
    }
  }
}
