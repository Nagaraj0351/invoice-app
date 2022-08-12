import React from "react";

const InvoiceNote = ({ canEdit }) => {
  return (
    <div>
      <h4>Notes</h4>
      <div contentEditable={canEdit}>Pay using google pay no. 99xxxxxxx</div>
    </div>
  );
};

export default InvoiceNote;
