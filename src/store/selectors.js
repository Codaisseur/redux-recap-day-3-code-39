// Normal selector:
// A function that takes the redux state,
//  and returns whatever you want
// You give this function to useSelector
// ==================================
//          reduxState => users
export function selectUsers(reduxState) {
  return reduxState.users.tas;
}

// Parametrized selector:
// A function that _creates_ a normal
//  selector
// You give the created function to useSelector
// ==================================
// name =>  reduxState => users with that name
export function selectUsersLike(prefix) {
  return function (reduxState) {
    return reduxState.users.tas.filter((user) => {
      return user.name.toLowerCase().startsWith(prefix.toLowerCase());
    });
  };
}
