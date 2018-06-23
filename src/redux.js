const LOAD = 'redux-example/LOAD';
const LOAD_SUCCESS = 'redux-example/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/LOAD_FAIL';

const initialState = {
  loaded: false
};

export default function info(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      console.log('Success!')
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}


export function load(dispatch) {
  dispatch({type:LOAD})
  
  return (dispatch) => {
    return fetch('https://picsum.photos/list')
      .then(res => {
        return res.json()
      })
      .then( data => { dispatch( { type: LOAD_SUCCESS, data:data.slice(0,50) } )})
      .catch(err => dispatch({type: LOAD_FAIL}));
  }
  
}


