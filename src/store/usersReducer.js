const initialState = {
  tas: [],
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "fetch_tas/start": {
      return {
        ...state,
        loading: true,
      };
    }
    case "fetch_tas/success": {
      return {
        ...state,
        loading: false,
        tas: [...state.tas, ...action.payload.rows],
      };
    }
    case "add_ta": {
      return {
        ...state,
        tas: [...state.tas, action.payload],
      };
    }
    default: {
      // console.log("Somehow this action wasn't handled?", action);
      return state;
    }
  }
}
