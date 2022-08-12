import React, { useEffect, useState } from "react";
import invoiceStore from "../stores/InvoiceStore";
import InvoiceItemForm from "./InvoiceItemForm";

const InvoiceItems = ({ canEdit }) => {
  const [invoiceItems, setInvoiceItems] = useState(invoiceStore.getAll());
  const [, updateState] = useState();

  const forceUpdate = React.useCallback(() => updateState({}), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onInvoiceItemChange = () => {
    invoiceStore.on("change", () => {
      setInvoiceItems(invoiceStore.getAll());
      forceUpdate();
    });
  };

  useEffect(() => {
    return () => onInvoiceItemChange();
  }, [onInvoiceItemChange]);

  return (
    <div className="invoice-items">
      <div className="row row-header">
        <div className="cell cell--width-120">Work Type</div>
        <div className="cell cell--width-60">Hours</div>
        <div className="cell">Materials</div>
        <div className="cell cell--width-120">Expenses</div>
        <div className="cell cell--width-120">Labour</div>
      </div>
      {invoiceItems.map((item, index) => {
        return (
          <div className="row" key={index}>
            <div className="cell cell--width-120">{item.work_type}</div>
            <div className="cell cell--width-60">{item.work_hours}</div>
            <div className="cell">{item.materials}</div>
            <div className="cell cell--width-120">{item.expenses}</div>
            <div className="cell cell--width-120">{item.labour}</div>
          </div>
        );
      })}
      {canEdit && <InvoiceItemForm />}
    </div>
  );
};

export default InvoiceItems;
