import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUsersLike } from "./store/selectors";
import { addTa, loadTasFromDevNetwork } from "./store/actions";

// business logic

// Redux: manages the state, fetches the data for it, and other business logic
// App:   ONLY displays the data (or triggers a data)

function App() {
  const [name, set_name] = useState("");
  const [offset, set_offset] = useState(0);

  const dispatch = useDispatch();

  const users = useSelector(selectUsersLike(name));

  const tasLoading = useSelector((reduxState) => {
    return reduxState.users.loading;
  });

  const loadTas = async () => {
    const fetchingThunk = loadTasFromDevNetwork(offset);
    console.log("2. dispatching the thunk...");
    dispatch(fetchingThunk);
    set_offset(offset + 10);
  };

  const addZorana = () => {
    dispatch(addTa("Zorana"));
  };

  return (
    <div className="App">
      <p>
        Name starts with:{" "}
        <input value={name} onChange={(e) => set_name(e.target.value)} />
      </p>
      <p>Click "Load more" or "Add Zorana" to add TAs!</p>
      <ul>
        {users.map((user) => {
          return <li>{user.name}</li>;
        })}
      </ul>
      {tasLoading ? <p>Loading...</p> : null}
      <p>
        <button onClick={addZorana}>Add Zorana as TA</button>
        <button onClick={loadTas}>Load more TAs</button>
      </p>
    </div>
  );
}

export default App;
