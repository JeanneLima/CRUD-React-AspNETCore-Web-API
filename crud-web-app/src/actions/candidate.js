//Actions define type of operations I want to do
//----------------------------------------------
import api from "./api";

//Action types
export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

//Formatting data
const formatData = (data) => ({
  ...data,
  age: parseInt(data.age ? data.age : 0),
});

//Fetch function (Action creator)
//It returns another funcion with a parameter dispatch
export const fetchAll = () => (dispatch) => {
  //GET - API Request
  api
    .Candidate()
    .fetchAll()
    .then((response) => {
      console.log("data GET:", response);

      //Returns a object of the operation and required data
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

//PUT - API Request Update Method
export const update = (id, data, onSuccess) => (dispatch) => {
  data = formatData(data);
  api
    .Candidate()
    .update(id, data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: { id: id, ...data },
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

//POST - API Request Create Method
//First parameter is the new data
//Second parameter is the callback function to be executed after the insert operation
export const create = (data, onSuccess) => (dispatch) => {
  data = formatData(data);

  api
    .Candidate()
    .create(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: response.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

//DELETE - API Request
export const Delete = (id, onSuccess) => (dispatch) => {
  api
    .Candidate()
    .delete(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
