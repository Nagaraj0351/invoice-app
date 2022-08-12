import dispatcher from "../dispatcher";
import invoiceConstants from "../constants";

export const addNewItem = (rowData) => {
  dispatcher.dispatch({
    type: invoiceConstants.ADD_NEW_ITEM,
    rowData,
  });
};
