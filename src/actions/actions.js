import actionTypes from "../constants/constants";
import { createAction } from "@reduxjs/toolkit";

// const onSearch = (e) => ({
//   type: actionTypes.SEARCH,
//   payload: e.target.value,
// });

// const onAdd = (personData) => ({
//   type: actionTypes.ADD,
//   payload: { ...personData, id: uuid() },
// });

// const onDelete = (e) => {
//   const id = e.target.id;
//   return {
//     type: actionTypes.DELETE,
//     payload: id,
//   };
// };

// export default {
//   onDelete,
//   onAdd,
//   onSearch,
// };

const onAddRequest = createAction(actionTypes.ACR);
const onAddSuccess = createAction(actionTypes.ACS);
const onAddFail = createAction(actionTypes.ACF);

const onFetch = createAction(actionTypes.FCR);
const onFetchSuccess = createAction(actionTypes.FCS);
const onFetchError = createAction(actionTypes.FCF);

const onDeleteContact = createAction(actionTypes.DCR);
const onDeleteSuccess = createAction(actionTypes.DCS);
const onDeleteFail = createAction(actionTypes.DCF);

const onSearch = createAction(actionTypes.SEARCH, (e) => ({
  payload: e.target.value,
}));

const onDelete = createAction(actionTypes.DELETE, (e) => ({
  payload: e.target.id,
}));

export default {
  onDelete,
  onSearch,
  onAddRequest,
  onAddSuccess,
  onAddFail,
  onFetch,
  onFetchSuccess,
  onFetchError,
  onDeleteContact,
  onDeleteSuccess,
  onDeleteFail,
};
