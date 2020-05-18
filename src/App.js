import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUsersLike } from "./store/selectors";
import { addTa } from "./store/actions";

// business logic

// Redux: manages the state, fetches the data for it, and other business logic
// App:   ONLY displays the data (or triggers a data)

function App() {
  const [name, set_name] = useState("");

  const dispatch = useDispatch();

  const users = useSelector(selectUsersLike(name));

  const addNewTa = () => {
    // side-effect
    dispatch(addTa("Zorana"));
  };

  return (
    <div className="App">
      <p>
        Name starts with:{" "}
        <input value={name} onChange={(e) => set_name(e.target.value)} />
      </p>
      <ul>
        {users.map((user) => {
          return <li>{user.name}</li>;
        })}
      </ul>
      <p>
        <button onClick={addNewTa}>Add Zorana to TAs</button>
      </p>
    </div>
  );
}

export default App;
