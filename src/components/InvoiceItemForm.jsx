import React, { useState } from "react";
import * as InvoiceActions from "../actions/InvoiceActions";

const defaultItemDetails = {
  work_type: "",
  work_hours: "",
  materials: "",
  expenses: "",
  labour: "",
};

const InvoiceItemForm = () => {
  const [invoiceItem, setInputItem] = useState(defaultItemDetails);

  const onInputChange = (event) => {
    setInputItem({
      ...invoiceItem,
      [event.target.name]: event.target.value,
    });
  };

  const addInvoiceItem = () => {
    if (invoiceItem.work_type && invoiceItem.work_hours && invoiceItem.labour) {
      InvoiceActions.addNewItem(invoiceItem);
      setInputItem(defaultItemDetails);
    }
  };

  return (
    <>
      <div className="row">
        <div className="cell cell--width-120">
          <input
            type="text"
            name="work_type"
            onChange={onInputChange}
            value={invoiceItem.work_type}
          />
        </div>
        <div className="cell cell--width-60">
          <input
            type="text"
            name="work_hours"
            onChange={onInputChange}
            value={invoiceItem.work_hours}
          />
        </div>
        <div className="cell">
          <input
            type="text"
            name="materials"
            onChange={onInputChange}
            value={invoiceItem.materials}
          />
        </div>
        <div className="cell cell--width-120">
          <input
            type="text"
            name="expenses"
            onChange={onInputChange}
            value={invoiceItem.expenses}
          />
        </div>
        <div className="cell cell--width-120">
          <input
            type="text"
            name="labour"
            onChange={onInputChange}
            value={invoiceItem.labour}
          />
        </div>
      </div>
      <button className="add-btn" onClick={addInvoiceItem}>
        Add
      </button>
    </>
  );
};

export default InvoiceItemForm;
