import React, { useState } from "react";
import InvoiceItems from "./InvoiceItems";
import InvoiceNote from "./InvoiceNote";

const InvoiceComponent = () => {
  const [canEdit, setCanEdit] = useState(false);
  return (
    <div className="invoice--container">
      <h2 className="heading">
        <span>Invoice</span>
        <button className="edit-btn" onClick={() => setCanEdit(!canEdit)}>
          {canEdit ? "Preview" : "Edit"}
        </button>
      </h2>
      <InvoiceItems canEdit={canEdit} />
      <InvoiceNote canEdit={canEdit} />
    </div>
  );
};

export default InvoiceComponent;
