import axios from "axios";

export function addTa(name) {
  return {
    type: "add_ta",
    payload: {
      name: name,
    },
  };
}

function startedFetchingTas() {
  return { type: "fetch_tas/start" };
}

// Why use thunks?
// Thunks are "meta-actions",
//  they can orchestrate any number of action dispatches
//  as they want, for example, fetching data

// This is a thunk action creator:
export function loadTasFromDevNetwork(offset = 0) {
  console.log("1. creating a thunk...");

  // It creates this thunk
  return async function thunk(dispatch, getState) {
    console.log("3. this is the thunk being called, let's fetch some data");

    // The thunk itself, dispatches multiple
    //  action along the way of fetching some data
    dispatch(startedFetchingTas());
    try {
      const res = await axios.get(
        "https://codaisseur-coders-network.herokuapp.com/developers?offset=" +
          offset
      );
      dispatch({ type: "fetch_tas/success", payload: res.data });
    } catch (error) {
      dispatch({ type: "fetch_tas/failed" });
    }
  };
}
