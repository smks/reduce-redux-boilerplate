# Comparison

## Old

```javascript
const userReducers = (state = INITIAL_STATE, { type, payload }) => {
  let newUsers;
  switch (type) {
    case getUsers.REQUEST:
      return {
        ...state,
        isLoadingUsers: true
      };
    case getUsers.FAILURE:
      return {
        ...state,
        isLoadingUsers: false,
        errorGettingUsers: true
      };
    case getUsers.SUCCESS:
      return {
        ...state,
        users: payload.users
      };
    default:
      return state;
  }
};
```

## New

```javascript
const usersReducer = handleActions(
  {
    [getUsers.REQUEST]: state => ({
      ...state,
      isLoadingUsers: true
    }),
    [getUsers.FAILURE]: state => ({
      ...state,
      isLoadingUsers: false,
      errorGettingUsers: true
    }),
    [getUsers.SUCCESS]: (state = INITIAL_STATE, { payload: { users } }) => ({
      ...state,
      users
    })
  },
  INITIAL_STATE
);
```
