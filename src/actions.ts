export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };
  export const fetchDataSuccess = (data: ResponseInit[]) => {
    return {
      type: 'FETCH_DATA_SUCCESS',
      payload: data,
    };
  };
  
  export const fetchDataFailure = () => {
    return {
      type: 'FETCH_DATA_FAILURE',
    };
  };
  

