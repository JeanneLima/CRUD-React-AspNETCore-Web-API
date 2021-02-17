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
  api
    .Candidate()
    .fetchAll()
    .then((response) => {
      console.log("response fetch", response);
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const create = (data, onSuccess) => (dispatch) => {
  api
    .Candidate()
    .create(data)
    .then((res) => {
      data = formatData(data);
      console.log("response", res);
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: { ...data },
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const update = (id, data, onSuccess) => (dispatch) => {
  api
    .Candidate()
    .update(id, data)
    .then((res) => {
      data = formatData(data);
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: { id, ...data },
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const Delete = (id, onSuccess) => (dispatch) => {
  api
    .Candidate()
    .delete(id)
    .then((res) => {
      console.log("response delete:", res);
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
