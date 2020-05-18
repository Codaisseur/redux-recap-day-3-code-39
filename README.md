# Code #39 - day 3 recap of Redux syntax & setup

### How do you create a store?

```jsx
import { createStore } from "redux";

export const store = createStore(reducer);
```

### What does the basic structure of a reducer look like?

```jsx
const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
```

### An example of a simple selector

```jsx
export function selectUsers(reduxState) {
  return reduxState.users;
}
```

### Suppose selectUsers is a selector, how do you use it in a component?

```jsx
import { useSelector } from "react-redux";

import { selectUsers } from "./store/selectors";

export default function MyComponent() {
  const users = useSelector(selectUsers);

  // ...
}
```

### Can you write a simple example of a parametrized selector?

```jsx
// a parametrized selector is a function that...
export function selectUsersLike(prefix) {
  // returns a normal selector:
  return function (reduxState) {
    // and then something interesting in here, for example:
    return reduxState.users.filter((user) => {
      return user.name.toLowerCase().startsWith(prefix.toLowerCase());
    });
  };
}
```

### An example of an action (object expression)

```jsx
{
  type: "add_ta",
  payload: {
    name: "Zorana"
  }
}
```

### How do you get the "dispatch" function in a component?

```jsx
import { useDispatch } from "react-redux";

export default function MyComponent() {
  const dispatch = useDispatch();

  // ...
}
```

### How do you dispatch an action in a component?

```jsx
import { useDispatch } from "react-redux";

export default function MyComponent() {
  const dispatch = useDispatch();

  // in a handler:
  const addNewTa = () => {
    dispatch({
      type: "add_ta",
      payload: {
        name: "Zorana",
      },
    });
  };

  // ...
}
```

### What does an action creator look like?

```jsx
export function addTa(name) {
  return {
    type: "add_ta",
    payload: {
      name: "Zorana",
    },
  };
}
```

### How do you use combineReducers to create a store built from separate slicers?

```jsx
import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
// import mapsReducer from "./mapsReducer";
// import cartReducer from "./cartReducer";

const reducer = combineReducers({
  users: usersReducer,
  // maps: mapsReducer,
  // cart: cartReducer
});

export default reducer;
```
