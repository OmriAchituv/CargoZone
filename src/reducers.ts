const initialState = {
    number: 0,
    responseData: [],
  };
  
  const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          number: state.number + 1,
        };
      case 'DECREMENT':
        return {
          ...state,
          number: state.number - 1,
        };
        case 'FETCH_DATA_SUCCESS':
          return {
            ...state,
            responseData: action.payload,
          };
        case 'FETCH_DATA_FAILURE':
          return {
            ...state,
            responseData: [],
          };
        default:
          return state;
      }
    };
    
    export default rootReducer;