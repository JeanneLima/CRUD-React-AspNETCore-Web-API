//Actions define type of operations I want to do
//----------------------------------------------
import api from "./api";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

//Fetch function (Action creator)
//It returns another funcion with a parameter dispatch
export const fetchAll = () => (dispatch) => {
  //GET - API Request
  api
    .Candidate()
    .fetchAll()
    .then((response) => {
      // console.log(response);

      //Returns a object of the operation and required data
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

// export const fetchAll = () => dispatch => {
// }

// dispatch(create({fullName: ''}))
